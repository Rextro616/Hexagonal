import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import express from "express";

import { config } from "./config";
import indexRouter from "./shared/infraestructure/index-router";

import { db } from "./shared/application/mysql";

function boostrap() {
  const app = express();

  app.use(express.json());

  const { port } = config.server;

  app.use("/", indexRouter);

  db.connect()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Error connecting to database: " + err));

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
