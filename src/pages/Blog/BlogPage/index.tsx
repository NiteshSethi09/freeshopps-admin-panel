import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { BlogPageTable } from "@/components/tables/BlogPage";
import { Button } from "@/components/ui/button";
import { BlogPageDialog } from "@/components/modals/BlogPage";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { BlogPageData } from "@/types/blogPage";

const BlogPage = () => {
  const [blogPage, setBlogPage] = useState<BlogPageData | null>(null);

  const handleFetchBlogPage = async () => {
    const result = await axiosInstance.get("/api/v1/admin/allBlogPage");
    console.log(result.data);

    setBlogPage(result.data);
  };

  useEffect(() => {
    handleFetchBlogPage();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">
          Blog Page
        </h2>
        <BlogPageDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new Blog
          </Button>
        </BlogPageDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {blogPage ? <BlogPageTable data={[blogPage.data]} /> : <Spinner />}
    </>
  );
};

export default BlogPage;
