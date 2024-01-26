import { CreateDepartment } from "../application/services/create-department";
import { DeleteDepartment } from "../application/services/delete-departments";
import { GetDepartmentById } from "../application/services/get-department-by-id";
import { GetDepartments } from "../application/services/get-departments";
import { CreateDepartmentController } from "./controllers/create-department-controller";
import { DeleteDepartmentController } from "./controllers/delete-department-controller";
import { GetDepartmentByIdController } from "./controllers/get-department-by-id-controller";
import { GetDepartmentsController } from "./controllers/get-departments-controller";
import { MySqlDepartment } from "./dBRepository/mysql-department-repository";

const mySqlDepartment = new MySqlDepartment();

const getDepartmentById = new GetDepartmentById(mySqlDepartment);
const getDepartments = new GetDepartments(mySqlDepartment);
const createDepartment = new CreateDepartment(mySqlDepartment);
const deleteDepartment = new DeleteDepartment(mySqlDepartment);

export const getDepartmentByIdController = new GetDepartmentByIdController(
    getDepartmentById
  );
  
  export const getDepartmentsController = new GetDepartmentsController(getDepartments);
  
  export const createDepartmentController = new CreateDepartmentController(
    createDepartment
  );
  
  export const deleteDepartmentController = new DeleteDepartmentController(
    deleteDepartment
  );