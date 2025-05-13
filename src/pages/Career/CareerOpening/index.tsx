import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CareerOpeningTable } from "@/components/tables/CareerOpening";
import { CareerOpeningDialog } from "@/components/modals/CareerOpening";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { CareerOpeningData } from "@/types/careerOpening";

const CareerOpeningPage = () => {
  const [careerOpeningData, setCareerOpeningData] =
    useState<CareerOpeningData | null>(null);

  const handleFetchCareerOpeningData = async () => {
    const result = await axiosInstance.get("/api/v1/admin/allCareerOpening");

    setCareerOpeningData(result.data);
  };

  useEffect(() => {
    handleFetchCareerOpeningData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">
          Career Opening
        </h2>
        <CareerOpeningDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new Career
          </Button>
        </CareerOpeningDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {careerOpeningData ? (
        <CareerOpeningTable data={careerOpeningData.data} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CareerOpeningPage;
