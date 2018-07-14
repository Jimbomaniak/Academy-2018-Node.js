const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongooseConnection = require("./db/dbconnect").connection;


const app = express();

// app.use(
//   session({
//     secret: "sessionsecretsessionsecret",
//     resave: true,
//     saveUninitialized: true,
//     store: new MongoStore({
//       mongooseConnection: mongooseConnection
//     })
//   })
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes/routes')(app);

app.listen(3000, () => console.log('API app started'));
