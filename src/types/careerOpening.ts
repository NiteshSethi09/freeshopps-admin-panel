export type ICareerOpeningDocs = {
  _id?: string;
  title: string;
  description: string;
  location: string;
  createdAt?: string;
  updatedAt?: string;
};
export type ICareerOpening = {
  docs: ICareerOpeningDocs[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
};
export type CareerOpeningData = {
  message: string;
  status: number;
  data: ICareerOpening;
};
