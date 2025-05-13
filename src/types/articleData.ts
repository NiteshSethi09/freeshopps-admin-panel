export type IArtcileDocs = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  popular: number;
  createdAt?: string;
  updatedAt?: string;
};
export type IArticles = {
  docs: IArtcileDocs[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: unknown;
  nextPage: unknown;
};
export type ArticleData = {
  status: number;
  message: string;
  data: IArticles;
};
