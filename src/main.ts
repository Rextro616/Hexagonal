import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import express from "express";

import { config } from "./config";
import indexRouter from "./shared/infraestructure/index-router";

function boostrap() {
  const app = express();

  app.use(express.json());

  const { port } = config.server;

  app.use("/", indexRouter);

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
