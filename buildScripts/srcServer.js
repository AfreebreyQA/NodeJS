"use strict";

const express = require("express");
const open = require("open");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("src"));

app.listen(port, (err) => {
    if (err) {console.log(err);}
    else {open(`http://localhost:${port}`)}
});