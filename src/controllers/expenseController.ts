import { Response, Request } from 'express';
import Expense from '../entities/expense';
import schemaExpense from '../validates/expenseValidate';
import { CreateExpenseDatabase, DeleteExpenseByIdAndUser, GetAllExpensesByUser, GetExpenseByIdAndUser, UpdateExpenseByIdAndUser } from '../database/expenseDatabase';
import sendEmail from '../sending/sendEmail';

export async function CreateExpense(req: Request, res: Response) {
  try {
    schemaExpense.validate(req.body);
    const expense = new Expense(req.body)
    const reponse = await CreateExpenseDatabase(expense)
    await sendEmail(req.body.email, expense)
    return res.status(201).json({ data: { ...reponse} });
  } catch (error){
    return res.status(400).json({ message: error });
  }
}

export async function FindExpenseById(req: Request, res: Response) {
  try {
    const reponse = await GetExpenseByIdAndUser(req.path, req.body.username)
    return res.status(200).json({ data: { ...reponse} });
  } catch (error){
    return res.status(404).json({ message: error });
  }
}

export async function FindAllExpense(req: Request, res: Response) {
  try {
    const reponse = await GetAllExpensesByUser(req.body.username)
    return res.status(200).json({ data: reponse });
  } catch (error){
    return res.status(404).json({ message: error });
  }
}

export async function UpdateExpenseById(req: Request, res: Response) {
  try {
    schemaExpense.validate(req.body);
    const expense = new Expense(req.body)
    const reponse = await UpdateExpenseByIdAndUser(expense)
    return res.status(200).json({ data: { ...reponse} });
  } catch (error){
    return res.status(400).json({ message: error });
  }
}

export async function DeleteExpenseById(req: Request, res: Response) {
  try {
    const reponse = await DeleteExpenseByIdAndUser(req.path, req.body.username)
    return res.status(200).json({ data: { ...reponse} });
  } catch (error){
    return res.status(400).json({ message: error });
  }
}