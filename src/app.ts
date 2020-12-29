import * as dotenv from 'dotenv';
const env = dotenv.config({path: './src/.env'}).parsed;

import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import apiRoutes from './routes/api.routes';
import './utils/database'; // connection to postgres
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'))
app.use('/api', apiRoutes);
app.use('/qwe', (req, res, next) => {
  next(res.json({
    a:5
  }));
  // next(null, new Error('============================================================================='), 1);
}, (req, res, next) => {
  console.log(req);
  res.send('qwe');
  // next('qwe');
});

app.listen(env.PORT, () => console.log(`Port ${env.PORT}`));
