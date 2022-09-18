import { DataTypes, Sequelize, Model } from "sequelize";

import sequelize from "../config/db.js";

class Usuario extends Model {
  static associate(models) {
    console.log("corriendo en el associate de Usuario");
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

export default Usuario;
