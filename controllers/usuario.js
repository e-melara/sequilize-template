export const register = async (req, res, { models }) => {
  const body = req.body;
  const usuario = await models.Usuario.create(body);
  return res.status(201).json(usuario);
};
