import * as usuarioController from "../controllers/usuarioController.js";

export default (express) => {
  const router = express.Router();

  router.get("/login", usuarioController.login);
  router.get("/register", usuarioController.register);

  return { name: "auth", router };
};
