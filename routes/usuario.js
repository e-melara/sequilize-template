import { createValidator } from "express-joi-validation";

import { usuario } from "../controllers/index.js";
import { usuario as schema } from "./schema/index.js";

export default (express, db) => {
  const validator = createValidator({
    passError: true,
  });
  const router = express.Router();

  // login
  router.post("/login", validator.body(schema.login), (req, res) => usuario.login(req, res, db));

  // register user
  router.post("/register", validator.body(schema.register), (req, res) =>
    usuario.register(req, res, db)
  );

  router.get('/confirmar/:token', (req, res) => usuario.confirmar(req, res, db));

  return { name: "auth", router };
};
