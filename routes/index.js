import fs from "fs";
import path from "path";
import dotenv from 'dotenv'

dotenv.config();

const main = (
  app,
  express,
  db,
) => {
  const log = Boolean(process.env.VIEW_ROUTES_LOG) || false;
  const nameApi = process.env.API_ROUTE_URL || "/api/v1";
  
  return new Promise(async (resolve, reject) => {
    try {
      const pathName = path.join(process.cwd(), "routes");
      const files = fs.readdirSync(pathName).filter((file) => {
        return file.indexOf(".") !== 0 && file !== "index.js";
      });

      for (const file of files) {
        const { default: route } = await import(path.join(pathName, file));
        const { name, router } = route(express, db, app);
        let nameRoute = `${nameApi}${name ? `/${name}` : ""}`;
        app.use(nameRoute, router);
        if (log) {
          console.log(`Routes: ${nameRoute}`);
        }
      }

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export { main };
