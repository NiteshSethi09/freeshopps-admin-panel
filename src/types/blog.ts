export type IBlogDocs = {
  _id?: string;
  blogCategoryId?: string;
  title: string;
  description: string;
  image: string;
  view: number;
  createdAt?: string;
  updatedAt?: string;
};
export type IBlogs = {
  docs: IBlogDocs[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: null;
};
export type BlogData = {
  message: string;
  status: number;
  data: IBlogs;
};
