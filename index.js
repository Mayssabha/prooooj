const express = require('express');
const noteRouter = require('./src/router/note');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3200
const errorHandler = require ('./src/middleware/error-handler');
require('./src/db/mongoose');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use(cors({ origin: (origin,callback) => callback(null,true), credentials: true}));
app.use('/accounts', require('./src/account/account-controller'));
app.use(errorHandler);
// app.all('/*', (req, res, next) => {
// //Enable the CORS Policy
// res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE, OPTIONS, PATCH ');
// res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
// next();
// })

app.use(noteRouter);

 app.listen(PORT, ()=> {
     console.log(`server listening to port ${PORT}`);
 })