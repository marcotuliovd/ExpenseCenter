import Expense from "../entities/expense";
const sgMail = require("@sendgrid/mail")

export default async function sendEmail(email: string, expense :Expense) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: process.env.USER_EMAIL,
      from: email,
      subject: `New expense registered`,
      text: `New expense registered`,
      html: `     
      Prezado ${expense.User},
      
      Gostaríamos de informar que uma nova despesa foi cadastrada em sua conta. Abaixo estão os detalhes relacionados a esta despesa:
      
      Descrição: ${expense.Description}
      Data: ${expense.Date}
      Valor: ${expense.Value}
      Agradecemos por manter suas informações atualizadas. Se você tiver alguma dúvida ou precisa de mais esclarecimentos, não hesite em entrar em contato conosco.
      
      Atenciosamente,
      Center Expense`,
    }
    console.log("mensage email", msg)
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    sgMail
      .send(msg)
      .then((response: Response) => {
        console.log(response)
      })
      .catch((error: any) => {
        console.error(error)
      })
  } catch (error) {
    console.log("SendEmail:send - ", error)
  }
}