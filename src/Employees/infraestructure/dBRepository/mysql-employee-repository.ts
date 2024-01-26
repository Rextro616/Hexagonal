import { db } from "../../../shared/application/mysql";
import { Employee } from "../../domain/entities/employee";
import { EmployeeRepository } from "../../domain/repository/employee-repository";

export class MySqlEmployee implements EmployeeRepository {
  getById(employeeId: number): Promise<Employee | null> {
    const query = "select * from employee where id = ?";
    return db.execute(query, [employeeId]).then((res: any) => {
      console.log(res[0]);
      return res[0][0] as Employee;
    });
  }
  getAll(): Promise<Employee[]> {
    const query = "select * from employee";
    return db.execute(query).then((res: any) => res[0] as Employee[]);
  }
  save(employee: Employee): Promise<Employee> {
    const { name, lastName } = employee;
    const query = "insert into employee (name, lastname) values (?,?)";
    return db
      .execute(query, [name, lastName])
      .then((res: any) => res.values as Employee);
  }
  deleteById(employeeId: number): Promise<string> {
    const query = "delete from employee where id = ?";
    return db.execute(query, [employeeId]).then((res: any) => res[0] as string);
  }
}
