import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Usuario extends Model {
    static associate(models) {
    }
  }
  
  Usuario.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
      },
      confirmado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
