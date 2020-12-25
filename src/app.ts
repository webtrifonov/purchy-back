import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import apiRoutes from './routes/api.routes';
import './utils/database'; // connection to postgres
const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);


app.listen(3000, () => console.log(`Port ${3000}`));