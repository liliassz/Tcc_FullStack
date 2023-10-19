const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/javascriptNote', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => console.log('Conexão com o banco de dados Estabelecida'))
  .catch((err) => console.log(err))

