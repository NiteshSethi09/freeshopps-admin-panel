export type IBlogCategory = {
  _id?: string;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};
export type BlogCategoryData = {
  message: string;
  status: number;
  data: IBlogCategory[];
};
