console.log('I am Haroon');
import  express  from "express";
// const express = require('express') ye old hogya he
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('request ip :', req.ip);
  res.send('I am Haroon this is my first server' )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})