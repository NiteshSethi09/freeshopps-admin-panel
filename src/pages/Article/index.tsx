import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ArticleTable } from "@/components/tables/Article";
import { ArticleDialog } from "@/components/modals/Article";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { ArticleData } from "@/types/articleData";

const Article = () => {
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  const handleFetchArticleData = async () => {
    const result = await axiosInstance.get("/api/v1/admin/Article/getArticle");
    setArticleData(result.data);
  };

  useEffect(() => {
    handleFetchArticleData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">Article</h2>
        <ArticleDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new article
          </Button>
        </ArticleDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {articleData ? <ArticleTable data={articleData.data} /> : <Spinner />}
    </>
  );
};

export default Article;
