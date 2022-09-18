import fs from "fs";
import path from "path";
import env from "dotenv";
import { Sequelize } from "sequelize";

env.config();

export async function connection() {
  const db = {};
  const models = {};
  const baseDir = path.join(process.cwd(), "models");
  const files = fs.readdirSync(baseDir).filter((file) => {
    return file.indexOf(".") !== 0 && file !== "index.js";
  });
  return new Promise(async (resolve, reject) => {
    try {
      const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          dialect: "postgres",
          logging: Boolean(process.env.SEQUELIZE_LOGGING),
          define: {
            timestamps: true,
          },
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
        }
      );
      for (const file of files) {
        const { default: _default } = await import(path.join(baseDir, file));
        const model = _default(sequelize);
        models[model.name] = model;
      }

      Object.keys(models).forEach((modelName) => {
        if (models[modelName].associate) {
          models[modelName].associate(models);
        }
      });

      // asociando a la variable db los datos
      db.models = models;
      db.sequelize = sequelize;
      db.Sequelize = Sequelize;
      resolve(db);
    } catch (error) {
      reject(error);
    }
  });
}
