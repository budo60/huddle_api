require('babel-register');
const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 8002;
const routes = require('./routes');
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', routes);


app.listen(PORT, () => {
  console.log(`app listening at port : , ${PORT}`)
})

