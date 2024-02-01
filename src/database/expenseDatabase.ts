import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import Expense from '../entities/expense';

export async function CreateExpenseDatabase(expense: Expense) {
    const SQL = `INSERT INTO ExpenseCenter.expense 
    (id, description, date, user, value, created_at) VALUES (?,?,?,?,?,?)`;
  const [insertExpense] = await connection
    .execute<ResultSetHeader>(SQL, [expense.Id, expense.Description,
    expense.Date, expense.User, expense.Value, expense.Created_at]);
  return expense;
}

export async function GetExpenseByIdAndUser(id: string, user: string) {
  const SQL = 'SELECT * FROM ExpenseCenter.expense WHERE id = ? AND user = ?';
  const [expense] = await connection.execute<ResultSetHeader>(SQL, [id, user]);
  return expense;
}

export async function GetAllExpensesByUser(user: string) {
  const SQL = 'SELECT * FROM ExpenseCenter.expense WHERE user = ?';
  const [expenses] = await connection.execute<ResultSetHeader>(SQL, [user]);
  return expenses;
}

export async function UpdateExpenseByIdAndUser(expense: Expense) {
  const SQL = `UPDATE ExpenseCenter.expense 
               SET description = ?, date = ?, value = ?, created_at = ? 
               WHERE id = ? AND user = ?`;

  const [updateExpense] = await connection.execute<ResultSetHeader>(
    SQL,
    [
      expense.Description,
      expense.Date,
      expense.Value,
      expense.Created_at,
      expense.Id,
      expense.User
    ]
  );

  return updateExpense;
}

export async function DeleteExpenseByIdAndUser(id: string, user: string) {
  const SQL = 'DELETE FROM ExpenseCenter.expense WHERE id = ? AND user = ?';

  const [deleteResult] = await connection.execute<ResultSetHeader>(
    SQL,
    [id, user]
  );

  return deleteResult;
}