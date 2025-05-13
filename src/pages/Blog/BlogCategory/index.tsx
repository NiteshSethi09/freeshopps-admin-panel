import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { BlogCategoryTable } from "@/components/tables/BlogCategory";
import { Button } from "@/components/ui/button";
import { BlogCategoryDialog } from "@/components/modals/BlogCategory";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { BlogCategoryData } from "@/types/blogCategory";

const BlogCategory = () => {
  const [blogCategory, setBlogCategory] = useState<BlogCategoryData | null>(
    null
  );

  const handleFetchBlogCategoryData = async () => {
    const result = await axiosInstance.get(
      "/api/v1/admin/BlogCategory/allBlogCategory"
    );

    setBlogCategory(result.data);
  };

  useEffect(() => {
    handleFetchBlogCategoryData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">
          Blog Category
        </h2>
        <BlogCategoryDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new Blog
          </Button>
        </BlogCategoryDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {blogCategory ? (
        <BlogCategoryTable data={blogCategory.data} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default BlogCategory;
