import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CareerOpeningCategoryTable } from "@/components/tables/CareerOpeningCategory";
import { CareerOpeninCategorygDialog } from "@/components/modals/CareerOpeningCategory";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { CareerOpeningCategoryData } from "@/types/careerOpeningCategory";

const CareerOpeningCategoryPage = () => {
  const [careerOpeningCategoryData, setCareerOpeningCategoryData] =
    useState<CareerOpeningCategoryData | null>(null);

  const handleFetchCareerOpeningCategoryData = async () => {
    const result = await axiosInstance.get(
      "/api/v1/admin/CareerOpeningCategory/allCareerOpeningCategory"
    );
    console.log(result.data);

    setCareerOpeningCategoryData(result.data);
  };

  useEffect(() => {
    handleFetchCareerOpeningCategoryData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">
          Career Opening Category
        </h2>
        <CareerOpeninCategorygDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new Career
          </Button>
        </CareerOpeninCategorygDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {careerOpeningCategoryData ? (
        <CareerOpeningCategoryTable data={careerOpeningCategoryData.data} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CareerOpeningCategoryPage;
