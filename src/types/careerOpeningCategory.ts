export type ICareerOpeningCategory = {
  _id?: string;
  title: string;
  type: string;
  createdAt?: string;
  updatedAt?: string;
};
export type CareerOpeningCategoryData = {
  message: string;
  status: number;
  data: ICareerOpeningCategory[];
};
