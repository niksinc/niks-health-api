import { Response } from 'express';

const getData = (res: Response) => {
  res.locals.connection.query(
    'SELECT * from health_data order by date desc',
    (err, rows, fields) => {
      if (err) {
        throw err;
      }
      console.log('this is rows', rows);
      res.send({rows});
    },
  );
};

export default getData;
