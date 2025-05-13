import { useState, type JSX } from "react";
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

import type { ICareerOpeningCategory } from "@/types/careerOpeningCategory";

export function CareerOpeninCategorygDialog({
  row,
  children,
}: {
  row?: Row<ICareerOpeningCategory>;
  children: JSX.Element;
}) {
  const [articleData, setArticleData] = useState<ICareerOpeningCategory>(
    row?.original ?? {
      title: "",
      type: "",
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
              htmlFor="type"
              className="text-base font-semibold inline-block mb-2"
            >
              Type<span className="text-[#f00]">*</span>
            </Label>
            <Input
              id="type"
              value={articleData.type}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  type: e.target.value,
                }))
              }
              className="border-[#D5D5D5] bg-[#F5F6FA] text-[#A6A6A6] text-sm font-normal"
              placeholder="Enter Article title"
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
