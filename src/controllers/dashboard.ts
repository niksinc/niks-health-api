import getData from '../models/health-data';

const dashboard = (req, res) => {
  const result = getData(res);
};

export default dashboard;
