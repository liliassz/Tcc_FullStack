const express = require('express');
const path = require('path')
const logger = require('morgan')
require('./config/database')

const usersRouter = require('./app/routes/users')

const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.listen(3000, () => {
    console.log(`Servidor Express está ouvindo na porta 3000`);
  });

module.exports = app