const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;                      //Toma variable de entorno para conexion DB

mongoose.connect(URI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useFindAndModify : false
});

const connection = mongoose.connection;

connection.once('open', ()=> console.log('Conectado'));
