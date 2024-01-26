import { EmployeeRepository } from "../../domain/repository/employee-repository";

export class GetEmployees {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async run() {
    try {
      const employee = await this.employeeRepository.getAll();

      if (employee.length == 0) {
        throw new Error(`There's no employees`);
      }
      return employee;
    } catch (error) {
      return null;
    }
  }
}
