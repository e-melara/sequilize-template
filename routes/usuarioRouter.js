import * as usuarioController from "../controllers/usuarioController.js";

export default (express) => {
  const router = express.Router();
  router.post("/register", usuarioController.registerUser);
  return { name: "auth", router };
};
