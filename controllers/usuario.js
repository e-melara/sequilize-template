import { generarId, generarToken} from "../helpers/token.js";
import { emailRegistro } from "../helpers/email.js";

export const login = async (req, res, { models }) => {
  const { email, password } = req.body;
  const usuario = await models.Usuario.findOne({ where: { email } });

  if (!usuario) {
    return res.status(400).json({
      errors: [
        {
          message: "Usuario no encontrado",
          field: "usuario",
        },
      ],
    });
  }

  if (!usuario.confirmado) {
    return res.status(400).json({
      errors: [
        {
          message: "Usuario no confirmado",
          field: "usuario",
        },
      ],
    });
  }

  const valid = await usuario.validarPassword(password);
  if (!valid) {
    return res.status(400).json({
      errors: [
        {
          message: "Password incorrecto",
          field: "password",
        },
      ],
    });
  }

  const token = generarToken(usuario.id);
  return res.status(200).json({
    message: "Usuario logueado",
    token,
  });
};

export const confirmar = async (req, res, { models }) => {
  const { token } = req.params;
  const usuario = await models.Usuario.findOne({
    where: {
      token,
    },
  });
  if (!usuario) {
    return res.status(400).json({
      errors: [
        {
          message: "Token invalido",
          field: "token",
        },
      ],
    });
  }

  usuario.token = null;
  usuario.confirmado = true;
  await usuario.save();

  return res.status(201).json({
    message: "Usuario Confirmado",
  });
};

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
        },
      ],
    });
  }
  const usuario = await models.Usuario.create({
    ...body,
    token: generarId(),
  });

  await emailRegistro({
    email: usuario.email,
    token: usuario.token,
    nombre: usuario.nombre,
  });

  return res.status(201).json({
    message: "Usuario creado correctamente",
    data: usuario,
  });
};
