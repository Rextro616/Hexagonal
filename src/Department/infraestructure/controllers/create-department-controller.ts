import { Request, Response } from "express";

import { CreateDepartment } from "../../application/services/create-department";

export class CreateDepartmentController {
    constructor(readonly createDepartment: CreateDepartment) {}
  
    async run(req: Request, res: Response) {
      try {
        const department = req.body;
        const result = await this.createDepartment.run(department);
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