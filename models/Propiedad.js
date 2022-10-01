import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
  class Propiedad extends Model {
    static associate(models) {
      this.belongsTo(models.Categoria, {
        foreignKey: "categoria_id",
      });
      
      this.belongsTo(models.Precio, {
        foreignKey: "precio_id",
      });
    }
  }

  Propiedad.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      habitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estacionamientos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      wc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      calle: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      lat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lng: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publicado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Propiedad",
    }
  );
  return Propiedad;
};
