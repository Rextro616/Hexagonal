import { createConnection } from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

import { config } from "../domain/entities/config";

const dbConnection: Connection = createConnection(config);
export const db = dbConnection.promise();
