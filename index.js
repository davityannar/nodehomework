const anun = require('./config/config');
//import config from './config/config.json';
console.log(anun.name);

//import {User,Product} from './models';

const user = require('./models/User');
let ban = new user.User();
ban.sayHay();

const product = require('./models/Product');
let urishBan = new product.Product();
urishBan.sayBan();