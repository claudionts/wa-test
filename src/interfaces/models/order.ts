export default interface IOrder {
  id?: number;
  userId: number;
  amount: number;
  value: number;
  description: string;

  createdDate?: Date;
  updatedDate?: Date;
}
