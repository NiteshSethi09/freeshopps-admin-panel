import { useState, type JSX } from "react";
import { FaCamera } from "react-icons/fa";
import type { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { ICareerOpeningDocs } from "@/types/careerOpening";

export function CareerOpeningDialog({
  row,
  children,
}: {
  row?: Row<ICareerOpeningDocs>;
  children: JSX.Element;
}) {
  const [articleData, setArticleData] = useState<ICareerOpeningDocs>(
    row?.original ?? {
      location: "",
      title: "",
      description: "",
    }
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:min-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">Career</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-[#ECECEE] shadow-[0px_0px_10px_0px_#00000000] mb-2">
              <FaCamera size={20} />
            </div>
            <Label className="text-[#4379EE] font-semibold text-base cursor-pointer">
              Upload Image
            </Label>
          </div>
          <div className="mb-5">
            <Label
              htmlFor="title"
              className="text-base font-semibold inline-block mb-2"
            >
              Title<span className="text-[#f00]">*</span>
            </Label>
            <Input
              id="title"
              value={articleData.title}
              onChange={(e) =>
                setArticleData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="border-[#D5D5D5] bg-[#F5F6FA] text-[#A6A6A6] text-sm font-normal"
              placeholder="Enter Article title"
            />
          </div>
          <div className="mb-5">
            <Label
              htmlFor="title"
              className="text-base font-semibold inline-block mb-2"
            >
              Location<span className="text-[#f00]">*</span>
            </Label>
            <Input
              id="title"
              value={articleData.location}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              className="border-[#D5D5D5] bg-[#F5F6FA] text-[#A6A6A6] text-sm font-normal"
              placeholder="Enter Article title"
            />
          </div>
          <div className="">
            <Label
              htmlFor="description"
              className="text-base font-semibold inline-block mb-2"
            >
              Description<span className="text-[#f00]">*</span>
            </Label>
            <Textarea
              id="description"
              value={articleData.description}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="border-[#D5D5D5] bg-[#F5F6FA] text-[#A6A6A6] text-sm font-normal resize-none h-36"
              placeholder="Enter article description"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button
            type="submit"
            className="w-3xs h-14 bg-[#199FB1]/90! text-lg font-bold cursor-pointer"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
