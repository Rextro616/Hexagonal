import { Request, Response } from "express";

import { GetDepartmentById } from "../../application/services/get-department-by-id";

export class GetDepartmentByIdController {
    constructor(readonly getDepartmentById: GetDepartmentById) {}
  
    async run(req: Request, res: Response) {
      const id: number = parseInt(req.params.id);
      try {
        const department = await this.getDepartmentById.run(id);
  
        if (department) res.status(200).send(department);
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
  