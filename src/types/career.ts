export type ICareer = {
  _id?: string;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};
export type CareerData = {
  message: string;
  status: number;
  data: ICareer[];
};
