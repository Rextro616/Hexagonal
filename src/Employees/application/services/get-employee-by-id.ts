import { EmployeeRepository } from "../../domain/repository/employee-repository";

export class GetEmployeeById {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async run(employeeId: number) {
    try {
      const employee = await this.employeeRepository.getById(employeeId);

      if (!employee) {
        throw new Error(`Employee not found ${employeeId}`);
      }
      return employee;
    } catch (error) {
      return null;
    }
  }
}
