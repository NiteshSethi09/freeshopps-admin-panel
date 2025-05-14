import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaqsTable } from "@/components/tables/Faq";
import { FaqsDialog } from "@/components/modals/Faq";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { FaqData } from "@/types/faq";

const Faqs = () => {
  const [faqsData, setFaqsData] = useState<FaqData | null>(null);

  const handleFetchFaqsData = async () => {
    const result = await axiosInstance.get("/api/v1/faq/all");
    setFaqsData(result.data);
  };

  useEffect(() => {
    handleFetchFaqsData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">FAQ's</h2>
        <FaqsDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new FAQ
          </Button>
        </FaqsDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {faqsData ? <FaqsTable data={faqsData.data} /> : <Spinner />}
    </>
  );
};

export default Faqs;
