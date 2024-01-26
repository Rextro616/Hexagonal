import dotenv from "dotenv";
import { ConnectionOptions } from "mysql2/typings/mysql/lib/Connection";

dotenv.config();

export const config: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
};
