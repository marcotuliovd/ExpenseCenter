import Expense from "../../entities/expense"

const ExpenseReturn : Expense = {
    Id: "85edfaac-1573-4f93-aeff-6f82f7112313",
    Description: "food",
    Date: "01/01/2024",
    User: "admin",
    Value: "10",
    Created_at: new Date()
}


const ExpenseReqBody = {
    Description: "food",
    Date: "01/01/2024",
    User: "admin",
    Value: 10,
}

export { ExpenseReturn, ExpenseReqBody }