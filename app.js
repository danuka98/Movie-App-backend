const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//routes

const slideShowMovie = require("./routes/slideShowMovie");
const movieList = require("./routes/movieList");

//use

app.use("/slideShowMovie", slideShowMovie);
app.use("/movieDetails", movieList);

module.exports = app;
