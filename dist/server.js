"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(express.static('dist/www'));
app.get('/', function (req, res) {
    res.sendfile('./dist/www/index.html');
});
app.listen(5000);
