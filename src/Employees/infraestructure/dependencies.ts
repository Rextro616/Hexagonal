import { CreateEmployee } from "../application/services/create-employee";
import { DeleteEmployee } from "../application/services/delete-employee";
import { GetEmployeeById } from "../application/services/get-employee-by-id";
import { GetEmployees } from "../application/services/get-employees";
import { CreateEmployeeController } from "./controllers/create-employee-controller";
import { DeleteEmployeeController } from "./controllers/delete-employee-controller";
import { GetEmployeeByIdController } from "./controllers/get-employee-by-id-controller";
import { GetEmployeesController } from "./controllers/get-employees-controller";
import { MySqlEmployee } from "./dBRepository/mysql-employee-repository";

const mySqlEmployee = new MySqlEmployee();

const getEmployeeById = new GetEmployeeById(mySqlEmployee);
const getEmployees = new GetEmployees(mySqlEmployee);
const createEmployee = new CreateEmployee(mySqlEmployee);
const deleteEmployee = new DeleteEmployee(mySqlEmployee);

export const getEmployeeByIdController = new GetEmployeeByIdController(
  getEmployeeById
);

export const getEmployeesController = new GetEmployeesController(getEmployees);

export const createEmployeeController = new CreateEmployeeController(
  createEmployee
);

export const deleteEmployeeController = new DeleteEmployeeController(
  deleteEmployee
);
