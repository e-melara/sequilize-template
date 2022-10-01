import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Categoria extends Model {
    static associate(models) {
      this.hasOne(models.Propiedad, {
        foreignKey: "categoria_id",
      })
    }
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
