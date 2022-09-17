import express from "express";


import db from "./config/db.js";
import { main } from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica
app.use(express.static("public"));

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
