const express = require ('express');
const morgan = require ('morgan');
const  app = express();
app.use(express.json());


//settings
app.set('port',process.env.PORT || 3000);

//routes
app.use(require('./routes/index'));
app.use('/api/registros',require('./routes/registros'));
app.use('/api/users',require('./routes/users'));


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//starting server
app.listen (app.get('port'),()=>{

    console.log(`servidor en puerto ${app.get('port')}`);
})