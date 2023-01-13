const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,  "failed to connect the database"));

db.once('open', ()=> {
    console.log('connected successfully to the database');
});

module.exports = db;