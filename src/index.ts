import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import apiRoutes from './routes/api.routes';

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
createConnection().then(async connection => {

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));

app.listen(3000, () => console.log(`Port ${3000}`));