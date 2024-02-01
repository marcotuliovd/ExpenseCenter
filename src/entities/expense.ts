import { randomUUID } from "crypto";
import { RequestCreateExpense } from "../interface/expenseInterface";

export default class Expense {
  Id: string;
  Description: string;
  Date: string;
  User: string;
  Value: string;
  Created_at: Date;

  constructor(data :RequestCreateExpense) {
    this.Id = randomUUID();
    this.Description = data.Description
    this.Date = data.Date
    this.User = data.User
    this.Value = data.Value
    this.Created_at = new Date();
  }
}
