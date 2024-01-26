import { Request, Response } from "express";

import { CreateEmployee } from "../../application/services/create-employee";

export class CreateEmployeeController {
  constructor(readonly createEmployee: CreateEmployee) {}

  async run(req: Request, res: Response) {
    try {
      const employee = req.body;
      const result = await this.createEmployee.run(employee);
      console.log(result);
      res.status(200).send(result);
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
