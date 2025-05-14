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

import type { IFaq } from "@/types/faq";

export function FaqsDialog({
  row,
  children,
}: {
  row?: Row<IFaq>;
  children: JSX.Element;
}) {
  const [articleData, setArticleData] = useState<IFaq>(
    row?.original ?? {
      answer: "",
      question: "",
    }
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:min-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">FAQ's</DialogTitle>
        </DialogHeader>
        <div>
          <div className="mb-5">
            <Label
              htmlFor="question"
              className="text-base font-semibold inline-block mb-2"
            >
              Question<span className="text-[#f00]">*</span>
            </Label>
            <Input
              id="question"
              value={articleData.question}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  question: e.target.value,
                }))
              }
              className="border-[#D5D5D5] bg-[#F5F6FA] text-[#A6A6A6] text-sm font-normal"
              placeholder="Enter Question"
            />
          </div>
          <div className="">
            <Label
              htmlFor="answer"
              className="text-base font-semibold inline-block mb-2"
            >
              Answer<span className="text-[#f00]">*</span>
            </Label>
            <Textarea
              id="answer"
              value={articleData.answer}
              onChange={(e) =>
                setArticleData((prev) => ({
                  ...prev,
                  answer: e.target.value,
                }))
              }
              className="border-[#D5D5D5] bg-[#F5F6FA] text-[#A6A6A6] text-sm font-normal resize-none h-36"
              placeholder="Enter Answer"
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
