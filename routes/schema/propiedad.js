import Joi from "joi";

const crear = Joi.object({
  titulo: Joi.string().required(),
  descripcion: Joi.string().required().max(200),
  categoria: Joi.number().required(),
  precio: Joi.number().required(),
  habitaciones: Joi.number().required(),
  estacionamiento: Joi.number().required(),
  wc: Joi.number().required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});

export { crear };
