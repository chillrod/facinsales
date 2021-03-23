export interface MailProps {
  name: string
  email: string
  company: string
  observation: string
}

function MailTemplate({
  name,
  email,
  company,
  observation
}: MailProps): string {
  return `
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>
   <body>
         <h1>Olá! Me chamo ${name}</h1>
         <p>Estou interessado no produto FacIN Sales, atualmente trabalho na empresa ${company}</p>
         <p>Meu email de contato é ${email}</p>
         <p>Observações: ${observation}</p>
   </body>
   </html>
   `
}

export default MailTemplate
