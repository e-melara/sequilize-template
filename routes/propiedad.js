import { createValidator } from "express-joi-validation";

import { propiedad } from "../controllers/index.js";

export default (express, db) => {
  const router = express.Router();
  
  // crear una propiedad
  router.get('/crear', (req, res) => propiedad.crear(req, res, db));

  return { name: "propiedades", router };
};

