import { DepartmentRepository } from "../../domain/repository/department-repository";

export class GetDepartments {
    constructor(private readonly departmentRepository: DepartmentRepository) {}
  
    async run() {
      try {
        const department = await this.departmentRepository.getAll();
  
        if (department.length == 0) {
          throw new Error(`There's no departments`);
        }
        return department;
      } catch (error) {
        return null;
      }
    }
  }