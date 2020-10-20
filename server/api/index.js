const path = require('path');
const chalk = require('chalk');
const app =require('./server');
const express= require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../../public');
const DIST_PATH = path.join(__dirname, '../../dist');
const ASSETS_PATH = path.join(__dirname, '../../client/assets');
const IMAGES_PATH = path.join(__dirname, '../../client/images');


app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use(express.static(ASSETS_PATH));
app.use(express.static(IMAGES_PATH));
app.use(cors());


app.use(express.json());

const startServer = () => new Promise((res)=>{
  app.listen(PORT, ()=>{
    console.log(chalk.green(`server listening on port ${PORT}`))
    res()
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(PUBLIC_PATH, './index.html'));
});

module.exports= {
  startServer,
  app
}