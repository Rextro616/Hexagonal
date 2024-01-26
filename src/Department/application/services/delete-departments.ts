import { DepartmentRepository } from "../../domain/repository/department-repository";

export class DeleteDepartment {
    constructor(private departmentRepository: DepartmentRepository) {}
    async run(departmentId: number): Promise<string> {
      try {
        const findDepartment = await this.departmentRepository.getById(departmentId);
        if (findDepartment) {
          await this.departmentRepository.deleteById(departmentId);
          return "Department deleted";
        }
        return `Could not delete department with id: ${departmentId}`;
      } catch (err: any) {
        console.log(err);
        throw new Error(err.toString());
      }
    }
  }