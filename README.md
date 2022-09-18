# Configuracion de la base de datos
### Crear una archivo .env con las siguientes variables

#### Para la base de datos
```env
DB_HOST = 'localhost'
DB_USER = 'user_postgress'
DB_PASS = 'password_postgress'
DB_NAME = 'db_postgress'
DB_PORT = 5432
SEQUELIZE_LOGGING = false
SEQUILIZE_SYNC = true
```

### Para las rutas
```env
VIEW_ROUTES_LOG = true # por si se desea ver el pathname de las rutas
API_ROUTE_URL = '/api/v1' # pathname base de las rutas + el nombre de la route.
```

## para las rutas (routes/***.js)
```js
// importando el controller para esta ruta.
import * as controller from "../controllers/****.js";

/* 
  variables: 
    - express => variable express base
    - db => esta variable tiene el contexto de sequelize, Sequelize, models[Esta variable tiene todos los modelos.]
*/
export default (express, db) => {
  const router = express.Router();

  // register user
  // la formas de llamar al controller para que reciba los parametros de la ruta
  router.post("/register", (req, res) => controller.registerUser(req, res, db));

  // retornamo el objecto de router y el nombre[name] con el que se llamara 
  // a los endpoints
  return { name: "auth", router };
};
```