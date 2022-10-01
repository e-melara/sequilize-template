import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
class Precio extends Model {
    static associate(models) {
      this.hasOne(models.Propiedad, {
        foreignKey: "precio_id",
      })
    }
  }

  Precio.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Precio",
    }
  );
  return Precio;
};
