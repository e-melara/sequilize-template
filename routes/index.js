import fs from "fs";
import path from "path";

const main = (app, express, options = {
  log: false,
}) => {
  const nameApi = "/api/v1";
  return new Promise((resolve, reject) => {
    try {
      const pathName = path.join(process.cwd(), "routes");
      fs.readdirSync(pathName).forEach((file) => {
        const nameFile = file.substring(0, file.lastIndexOf("."));
        if (nameFile !== "index") {
          import(`./${nameFile}.js`).then((module) => {
            const { name, router } = module.default(express, app);
            let nameRoute = nameApi;
            if (name) {
              nameRoute += `/${name}`;
            }
            if (options.log) {
              console.log(`Route: ${nameRoute}`);
            }
            app.use(nameRoute, router);
          });
        }
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export { main };
