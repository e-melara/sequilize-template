import fs from "fs";
import path from "path";

const main = (
  app,
  express,
  db,
  options = {
    log: false,
    api: null,
  }
) => {
  const { log, api = "/api/v1" } = options;
  const nameApi = api || "/api/v1";
  let routeName = [];
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
        routeName.push(nameRoute);
        app.use(nameRoute, router);
      }

      if (log) {
        console.log(`Routes: ${routeName}`);
      }
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export { main };
