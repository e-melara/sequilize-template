import { connection } from "../models/index.js";

// seeders
import precioSeed from "./precio.js";
import categoriaSeed from "./categoria.js";

const importart = async () => {
  connection().then(async (db) => {
    try {
      await db.sequelize.sync({ force: false });
      // seeders
      await db.models.Categoria.bulkCreate(categoriaSeed);
      await db.models.Precio.bulkCreate(precioSeed);
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });
};

if (process.argv[2] === "-i") {
  importart();
}
