import getData from '../models/health-data';

const dashboard = (req, res) => {
  // TODO: do cleanup for this app
  const result = getData(res);
  console.log('this is result', result);
  // res.send(result);
  // res.send({ data: result, error: '' });
  
};

export default dashboard;
