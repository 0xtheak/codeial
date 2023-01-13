const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const db = require('./config/mongoose');

// use express router
app.use('/', require('./routes'));

// set up the ejs 
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
    
    if(err){
        console.log('Failed to start server');
        return;
    }
    console.log('server started successfully on port ', port);
})