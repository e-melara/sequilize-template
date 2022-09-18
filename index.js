import express from "express";

// import db from "./config/db.js";
import { connection } from "./models/index.js";
import { main } from "./routes/index.js";

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
        await db.sequelize.sync({ force: false });
        app.listen(port, () => {
          console.log("listening on port 3000");
        });
      } catch (error) {
        throw new Error(error);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
