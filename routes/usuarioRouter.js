import * as controller from "../controllers/usuarioController.js";

export default (express, db) => {
  const router = express.Router();

  // register user
  router.post("/register", (req, res) => controller.registerUser(req, res, db));

  return { name: "auth", router };
};
