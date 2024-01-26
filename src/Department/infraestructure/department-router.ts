import express from "express";

import {
  createDepartmentController,
  deleteDepartmentController,
  getDepartmentByIdController,
  getDepartmentsController,
} from "./dependencies";

const departmentRouter = express.Router();

departmentRouter
  .get("/:id", getDepartmentByIdController.run.bind(getDepartmentByIdController))
  .get("/", getDepartmentsController.run.bind(getDepartmentsController))
  .post("/", createDepartmentController.run.bind(createDepartmentController))
  .delete("/:id", deleteDepartmentController.run.bind(deleteDepartmentController));
export { departmentRouter };
