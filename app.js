const express = require('express');
const path = require('path')
const logger = require('morgan')
require('./config/database')
const cors = require('cors')
const usersRouter = require('./app/routes/users')
const notesRouter = require('./app/routes/notes')

const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/users', usersRouter)
app.use('/notes', notesRouter)

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.listen(3000, () => {
    console.log(`Servidor Express está ouvindo na porta 3000`);
  });

module.exports = app