import express from "express";

import {
  createEmployeeController,
  deleteEmployeeController,
  getEmployeeByIdController,
  getEmployeesController,
} from "./dependencies";

const employeeRouter = express.Router();

employeeRouter
  .get("/:id", getEmployeeByIdController.run.bind(getEmployeeByIdController))
  .get("/", getEmployeesController.run.bind(getEmployeesController))
  .post("/", createEmployeeController.run.bind(createEmployeeController))
  .delete("/:id", deleteEmployeeController.run.bind(deleteEmployeeController));
export { employeeRouter };
