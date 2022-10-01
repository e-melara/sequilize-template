import nodemailer from 'nodemailer'

const emailRegistro = async ({
  nombre, email, token,
}) => {
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: `Confirma tu cuenta en ${process.env.EMAIL_FROM}`,
    text: `Confirma tu cuenta en ${process.env.EMAIL_FROM}`,
    html: `
      <h1>Confirma tu cuenta en ${process.env.EMAIL_FROM}</h1>
      <p>Hola ${nombre}</p>
      <p>Para confirmar tu cuenta, haz click en el siguiente enlace:</p>
      <a href=${process.env.BACKEND_URL}:${process.env.PORT || 3000}${process.env.API_ROUTE_URL}/auth/confirmar/${token}>Confirmar cuenta</a>
      <p>Si no has creado una cuenta, ignora este email.</p>
    `
  })
} 

export {
  emailRegistro,
}