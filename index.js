import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { main } from "./routes/index.js";
import errorHandler from "./handler/error.js";
import { connection } from "./models/index.js";

const app = express();
const port = process.env.PORT || 3000;

// carpeta publica
app.use(express.static("public"));

// leer los datos de un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection()
  .then((db) => {
    main(app, express, db).then(async () => {
      try {
        await db.sequelize.sync({
          force: process.env.SEQUILIZE_SYNC === "true",
        });

        app.use(errorHandler);
        app.listen(port, () => {
          console.log(`listening on port ${port}`);
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
