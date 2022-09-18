import { createValidator } from "express-joi-validation";

import { usuario } from "../controllers/index.js";
import { usuario as schema } from "./schema/index.js";

export default (express, db) => {
  const validator = createValidator({
    passError: true,
  });
  const router = express.Router();

  // register user
  router.post("/register", validator.body(schema.register), (req, res) =>
    usuario.register(req, res, db)
  );

  return { name: "auth", router };
};
