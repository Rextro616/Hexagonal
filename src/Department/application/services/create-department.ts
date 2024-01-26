import { Department } from "../../domain/entities/department";
import { DepartmentRepository } from "../../domain/repository/department-repository";

export class CreateDepartment {
    constructor(private readonly departmentRepository: DepartmentRepository) {}
    async run(department: Department) {
      try {
        console.log(department);
        const employeeCreated = await this.departmentRepository.save(department); 
        return employeeCreated;
      } catch (err) {      
        console.log(err)
        return null;
      }
    }
  }