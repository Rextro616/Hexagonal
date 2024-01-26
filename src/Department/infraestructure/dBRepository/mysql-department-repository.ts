import { db } from "../../../shared/application/mysql";
import { Department } from "../../domain/entities/department";
import { DepartmentRepository } from "../../domain/repository/department-repository";

export class MySqlDepartment implements DepartmentRepository {
  getById(departmentId: number): Promise<Department | null> {
    const query = "select * from department where id = ?";
    return db.execute(query, [departmentId]).then((res: any) => {
      console.log(res[0]);
      return res[0][0] as Department;
    });
  }
  getAll(): Promise<Department[]> {
    const query = "select * from department";
    return db.execute(query).then((res: any) => res[0] as Department[]);
  }
  save(department: Department): Promise<Department> {
    const { name } = department;
    const query = "insert into department (name) values (?)";
    return db
      .execute(query, [name])
      .then((res: any) => res.values as Department);
  }
  deleteById(departmentId: number): Promise<string> {
    const query = "delete from department where id = ?";
    return db.execute(query, [departmentId]).then((res: any) => res[0] as string);
  }
}
