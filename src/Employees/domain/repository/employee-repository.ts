import { Employee } from "../entities/employee";

export interface EmployeeRepository {
  getById(employeeId: number): Promise<Employee | null>;
  getAll(): Promise<Employee[]>;
  save(employee: Employee): Promise<Employee>;
  deleteById(employeeId: number): Promise<string>;
}
