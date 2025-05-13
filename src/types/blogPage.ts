export type IBlogPage = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BlogPageData = {
  message: string;
  status: number;
  data: IBlogPage;
};
