import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BlogTable } from "@/components/tables/Blog";
import { BlogDialog } from "@/components/modals/Blog";
import Spinner from "@/components/Spinner";

import { axiosInstance } from "@/lib/axiosInstance";

import type { BlogData } from "@/types/blog";

const BlogPage = () => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  const handleFetchBlogData = async () => {
    const result = await axiosInstance.get("/api/v1/admin/allBlog");
    console.log(result.data);

    setBlogData(result.data);
  };

  useEffect(() => {
    handleFetchBlogData();
  }, []);
  return (
    <>
      <div className="flex">
        <h2 className="font-bold text-3xl text-[#202224] flex-1/2">Blog</h2>
        <BlogDialog>
          <Button className="mr-2 bg-[#199FB1]! cursor-pointer">
            <Plus /> Add new Blog
          </Button>
        </BlogDialog>
        <Button className="bg-white! cursor-pointer">
          <Trash2 size={24} color="#F80036" />
        </Button>
      </div>
      {blogData ? <BlogTable data={blogData.data} /> : <Spinner />}
    </>
  );
};

export default BlogPage;
