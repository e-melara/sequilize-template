import * as usuarioController from "../controllers/usuarioController.js";

export default (express) => {
  const router = express.Router();

  // register user
  router.post("/register", usuarioController.registerUser);
  
  return { name: "auth", router };
};
