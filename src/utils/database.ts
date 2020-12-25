import {createConnection} from 'typeorm';

createConnection().then(async connection => {

  console.log('Connect to db');

}).catch(error => console.log(error));
