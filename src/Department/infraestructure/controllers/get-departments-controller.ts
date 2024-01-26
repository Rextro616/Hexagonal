import { Request, Response } from "express";

import { GetDepartments } from "../../application/services/get-departments";

export class GetDepartmentsController {
  constructor(readonly getDepartments: GetDepartments) {}

  async run(req: Request, res: Response) {
    try {
      const departments = await this.getDepartments.run();

      if (departments?.length) res.status(200).send(departments);
      else
        res.status(404).send({
          status: "error",
          msn: `There's no departments`,
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