import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CareerTable } from "@/components/tables/Career";
import { CareerDialog } from "@/components/modals/Career";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { CareerData } from "@/types/career";

const CareerPage = () => {
  const [careerData, setCareerData] = useState<CareerData | null>(null);

  const handleFetchCareerData = async () => {
    const result = await axiosInstance.get("api/v1/admin/Career/allCareer");
    console.log(result.data);

    setCareerData(result.data);
  };

  useEffect(() => {
    handleFetchCareerData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">Career</h2>
        <CareerDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new Career
          </Button>
        </CareerDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {careerData ? <CareerTable data={careerData.data} /> : <Spinner />}
    </>
  );
};

export default CareerPage;
