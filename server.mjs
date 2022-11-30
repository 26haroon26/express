import express from "express";
import cors from 'cors';

import path, { dirname } from "path";
// const express = require('express') ye old hogya he
const app = express();
const port = process.env.PORT || 5000;
const _dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.get("/weather/:cityname", (req, res) => {
  console.log("request ip :", req.ip);
  if (req.params.cityname === 'karachi') {
    console.log('karachi');
    res.send(
      {
        temp: 30,
        humidity: 50,
        time: new Date().toString(),
        visiblity: 1,
        feels: 23,

      });
  }
  else if (req.params.cityname === 'lahore') {
    console.log('lahore');

    res.send(
      {
        temp: 40,
        humidity: 80,
        time: new Date().toString(),
        visiblity: 3,
        feels: 40,

      });

  } 
  else if (req.params.cityname === 'islamabad') {
    console.log('islamabad');
    res.send(
      {
        temp: 20,
        humidity: 10,
        time: new Date().toString(),
        visiblity: 0,
        feels: 5,
      });

  }
}
  );

app.get("/forcast", (req, res) => {
  console.log("request ip :", req.ip);
  res.send([
    {
      day: 1,
      temp: 30,
      humidity: 50,
      time: new Date().toString(),
      visiblity: 1,
    },
    {
      day: 2,
      temp: 30,
      humidity: 50,
      time: new Date().toString(),
      visiblity: 1,
    },
    {
      day: 3,
      temp: 30,
      humidity: 50,
      time: new Date().toString(),
      visiblity: 1,
    },
    {
      day: 4,
      temp: 30,
      humidity: 50,
      time: new Date().toString(),
      visiblity: 1,
    },
    {
      day: 5,
      temp: 30,
      humidity: 50,
      time: new Date().toString(),
      visiblity: 1,
    },
  ]);
});
app.use("/", express.static(path.join(_dirname, "./web/build")));
app.use("*", express.static(path.join(_dirname, "./web/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
