export const crear = async (req, res, { models }) => {
  const [categorias, precios] = await Promise.all([
    models.Categoria.findAll({
      attributes: ["id", "nombre"],
    }),
    models.Precio.findAll({
      attributes: ["id", "nombre"],
    }),
  ]);

  return res.json({
    precios,
    categorias,
  });
};
