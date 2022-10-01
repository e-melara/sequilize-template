import { generarId } from '../helpers/token.js';

export const register = async (req, res, { models }) => {
  const body = req.body;

  const usuarioExiste = await models.Usuario.findOne({ 
    where: { email: body.email },
   });

  if (usuarioExiste) {
    return res.status(400).json({
      errors: [
        {
          message: "Usuario ya registrado",
          field: "email",
        }
      ]
    });
  }
  const usuario = await models.Usuario.create({
    ...body,
    token: generarId(),
  });
  return res.status(201).json({
    message: 'Usuario creado correctamente',
    data: usuario,
  });
};
