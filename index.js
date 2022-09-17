import express from "express";


import db from "./config/db.js";
import { main } from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

// carpeta publica
app.use(express.static("public"));

// leer los datos de un formulario
app.use(express.urlencoded({ extended: true }));

main(app, express)
  .then(async () => {
    // conexion a la base de datos
    try {
      await db.authenticate();
      app.listen(port, () => {
        console.log("listening on port 3000");
      });
    } catch (error) {
      throw new Error(error);
    }
  })
  .catch((error) => {
    console.log(error);
  });
