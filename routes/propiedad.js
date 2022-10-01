import { createValidator } from "express-joi-validation";

import { propiedad } from "../controllers/index.js";
import { propiedad as schema } from "./schema/index.js";

export default (express, db) => {
  const validator = createValidator({
    passError: true,
  });
  const router = express.Router();

  // crear una propiedad
  router.get("/crear", validator.body(schema.crear), (req, res) =>
    propiedad.crear(req, res, db)
  );

  return { name: "propiedades", router };
};
