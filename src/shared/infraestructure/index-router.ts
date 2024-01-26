import { Request, Response, Router } from "express";

import { employeeRouter } from "../../Employees/infraestructure/employee-router";

const indexRouter = Router();
const prefix = "/rex";

indexRouter.use(`${prefix}/employees`, employeeRouter);

indexRouter.get(prefix, (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

export default indexRouter;
