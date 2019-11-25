import * as express from 'express';
import { Request, Response } from 'express';
import * as mysql from 'mysql';
import dashboard from './controllers/dashboard';
import * as dotEnv from 'dotenv'; // This plugin is needed to read the data from .env file
import * as chalk from 'chalk';

dotEnv.config();

const app = express();
const port = 3220;


const { DATABASE_HOST, USER, PASSWORD, DATABASE } = process.env;

const db = mysql.createPool({
    connectionLimit: 100000,
    host: DATABASE_HOST,
    user: 'root',
    password: PASSWORD,
    database: DATABASE,
  });

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.use((req: Request, res: Response, next: any) => {
  // res.locals.connection = mysql.createPool({
  //   connectionLimit: 100000,
  //   host: DATABASE_HOST,
  //   user: 'root',
  //   password: PASSWORD,
  //   database: DATABASE,
  // });
  // next();
});

app.get('/dashboard/', dashboard);

const logInfo = (...args) => {
  console.log(chalk.white('[INFO ] '), chalk.blue(args.join(' ').trim()));
};
const logError = (...args) => {
  console.log(chalk.white('[ERROR] '), chalk.red(args.join(' ').trim()));
}; 
const logWarning = (...args) => {
  console.log(chalk.white('[ERROR] '), chalk.magenta(args.join(' ').trim()));
}; 

app.listen(port, () => {
  logError(' ', 'error');
  logInfo(`PORT: ${port}`, 'hee');
  logInfo(`Database: ${DATABASE}`);
  logInfo(`Database connection limit: 100000`);
  logWarning('warning;(');
});

