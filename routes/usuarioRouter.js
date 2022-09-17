import * as usuarioController from "../controllers/usuarioController.js";

export default (express) => {
  const router = express.Router();

  router.get("/login", usuarioController.login);

  return { name: "auth", router };
};
