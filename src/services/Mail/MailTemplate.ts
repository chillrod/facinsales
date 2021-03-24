export interface MailProps {
  name: string
  email: string
  phone: string
  company: string
  role: string
  observation: string
}

function MailTemplate({
  name,
  email,
  phone,
  company,
  role,
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
         <h3>Olá! Me chamo ${name}</h3>
         <p>Estou interessado no produto FacIN Sales, atualmente trabalho na empresa ${company} ${
    role ? `com o cargo de ${role}` : ''
  }</p>
         <p>Meu email de contato é ${email}</p>
         <p>E meu telefone: ${phone}
         <p>${observation ? `Observações ${observation}` : ''}</p>
   </body>
   </html>
   `
}

export default MailTemplate
