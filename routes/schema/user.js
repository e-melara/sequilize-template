import Joi from "joi";

const register = Joi.object({
  email: Joi.string().required().email(),
  nombre: Joi.string().required().min(3).max(30),
  password: Joi.string().required().min(6).max(12),
  rpassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirmacion de contraseña")
    .messages({
      "any.only": "No coincide con la contraseña",
    }),
});

const login = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(12),
});

export { register, login };
