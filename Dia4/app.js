

const express = require("express");
const cors = require('cors');
const photosRouter = require("./src/routes/photos.router");
const errorHandling = require("./src/error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(photosRouter);
app.use(function(req, res, next)
{
    res.status(404).json({ message:"Endpoint doesnt found"})
});

app.use(errorHandling);

module.exports = app;