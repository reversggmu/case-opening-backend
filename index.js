const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const weaponRoute = require('./routes/weapon');
const skinRoute = require('./routes/skin');
const boxRoute = require('./routes/box');
const historyRoute = require('./routes/history');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/user', userRoute);
app.use('/weapon', weaponRoute);
app.use('/skin', skinRoute);
app.use('/box', boxRoute);
app.use('/history', historyRoute)

module.exports = app;