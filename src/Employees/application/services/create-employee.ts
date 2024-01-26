import { Employee } from "../../domain/entities/employee";
import { EmployeeRepository } from "../../domain/repository/employee-repository";

export class CreateEmployee {
  constructor(private readonly employeeRepository: EmployeeRepository) {}
  async run(employee: Employee) {
    try {
      console.log(employee);
      const employeeCreated = await this.employeeRepository.save(employee); 
      return employeeCreated;
    } catch (err) {      
      console.log(err)
      return null;
    }
  }
}
