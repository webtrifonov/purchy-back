import {createConnection} from 'typeorm';

createConnection().then(async connection => {

  console.log('Connect to db');

}).catch(error => console.error('Database connection error', error.message));
