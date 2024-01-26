import { EmployeeRepository } from "../../domain/repository/employee-repository";

export class DeleteEmployee {
  constructor(private employeeRepository: EmployeeRepository) {}
  async run(employeeId: number): Promise<string> {
    try {
      const findEmployee = await this.employeeRepository.getById(employeeId);
      if (findEmployee) {
        await this.employeeRepository.deleteById(employeeId);
        return "Employee deleted";
      }
      return `Could not delete employee with id: ${employeeId}`;
    } catch (err: any) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
