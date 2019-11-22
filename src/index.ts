import * as express from 'express';
import { Request, Response } from 'express';
import * as mysql from 'mysql';
import dashboard from './controllers/dashboard';
import * as dotEnv from 'dotenv'; // This plugin is needed to read the data from .env file

dotEnv.config();

const app = express();
const port = 3220;

const { DATABASE_HOST, USER, PASSWORD, DATABASE } = process.env;

app.use((req: Request, res: Response, next: any) => {
  
  res.locals.connection = mysql.createPool({
    connectionLimit: 100000,
    host: DATABASE_HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  });
  next();
});

app.get('/dashboard/', dashboard);

app.listen(port, () => console.log(`PORT: ${port}`, process.env.DATABASE));

