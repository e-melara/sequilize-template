import express from "express";

import { main } from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica
app.use(express.static("public"));

main(app, express)
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
