import { Department } from "../entities/department";

export interface DepartmentRepository {
    getAll(): Promise<Department[]>;
    save(employee: Department): Promise<Department>;
    deleteById(employeeId: number): Promise<string>;
    getById(employeeId: number): Promise<Department | null>;
  }