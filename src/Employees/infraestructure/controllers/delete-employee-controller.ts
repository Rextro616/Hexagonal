import { Request, Response } from "express";

import { DeleteEmployee } from "../../application/services/delete-employee";

export class DeleteEmployeeController {
  constructor(readonly deleteEmployee: DeleteEmployee) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);
      const handleError = await this.deleteEmployee.run(parseId);
      return res.status(200).json(handleError);
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
