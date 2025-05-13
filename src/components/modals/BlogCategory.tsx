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
import { Textarea } from "@/components/ui/textarea";

import type { IBlogCategory } from "@/types/blogCategory";

export function BlogCategoryDialog({
  row,
  children,
}: {
  row?: Row<IBlogCategory>;
  children: JSX.Element;
}) {
  const [articleData, setArticleData] = useState<IBlogCategory>(
    row?.original ?? {
      description: "",
      title: "",
    }
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:min-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">Blog</DialogTitle>
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
