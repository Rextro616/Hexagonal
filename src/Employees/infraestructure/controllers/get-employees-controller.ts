import { Request, Response } from "express";

import { GetEmployees } from "../../application/services/get-employees";

export class GetEmployeesController {
  constructor(readonly getEmployees: GetEmployees) {}

  async run(req: Request, res: Response) {
    try {
      const employees = await this.getEmployees.run();

      if (employees?.length) res.status(200).send(employees);
      else
        res.status(404).send({
          status: "error",
          msn: `No existen empleados`,
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
