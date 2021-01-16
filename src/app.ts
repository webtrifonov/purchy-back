import * as dotenv from 'dotenv';
const env = dotenv.config({path: './src/.env'}).parsed;
import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import * as cors from 'cors';
import passport from './utils/passport';
import apiRoutes from './routes/api.routes';
import './utils/database'; // connection to postgres

const app = express();


app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('secret key'));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({works: true});
});
app.get('/qwe', (req, res) => {
  res.cookie('koken', '1234');
  res.json({ qwe: true });
});
app.get('/qwe1', (req, res) => {
  res.json({
    success: true,
    qwe: req.cookies
  });
});
app.listen(env.PORT, () => console.log(`Port ${env.PORT}`));
