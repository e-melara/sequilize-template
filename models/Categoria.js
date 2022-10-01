import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Categoria extends Model {
    static associate(models) {}
  }

  Categoria.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Categoria",
    }
  );
  return Categoria;
};
