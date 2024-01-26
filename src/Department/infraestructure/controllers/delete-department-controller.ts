import { Request, Response } from "express";

import { DeleteDepartment } from "../../application/services/delete-departments";

export class DeleteDepartmentController {
  constructor(readonly deleteDepartment: DeleteDepartment) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);
      const handleError = await this.deleteDepartment.run(parseId);
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
