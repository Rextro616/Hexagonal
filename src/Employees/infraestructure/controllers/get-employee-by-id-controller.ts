import { Request, Response } from "express";

import { GetEmployeeById } from "../../application/services/get-employee-by-id";

export class GetEmployeeByIdController {
  constructor(readonly getEmployeeById: GetEmployeeById) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    try {
      const employee = await this.getEmployeeById.run(id);

      if (employee) res.status(200).send(employee);
      else
        res.status(404).send({
          status: "error",
          msn: `No existe un empleado con id: ${id}`,
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
