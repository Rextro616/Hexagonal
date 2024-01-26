import { DepartmentRepository } from "../../domain/repository/department-repository";

export class GetDepartmentById {
    constructor(private readonly departmentRepoitory: DepartmentRepository) {}
  
    async run(departmentId: number) {
      try {
        const department = await this.departmentRepoitory.getById(departmentId);
  
        if (!department) {
          throw new Error(`Department not found ${departmentId}`);
        }
        return department;
      } catch (error) {
        return null;
      }
    }
  }