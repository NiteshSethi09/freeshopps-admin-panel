export type IFaq = {
  _id?: string;
  question: string;
  answer: string;
  createdAt?: string;
  updatedAt?: string;
};
export type FaqData = {
  status: number;
  message: string;
  data: IFaq[];
};
