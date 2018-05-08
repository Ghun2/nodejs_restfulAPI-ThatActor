var express = require('express'),
    morgan = require('morgan'),
    bodyparser = require('body-parser'),
    wines = require('./routes/wines');

var app = express();

app.use(morgan('short'));
// app.use(function(req,res){
//   res.send('<h1>hello ghun</h1>');
// });
app.get('/wines', wines.findAll);
// app.get('/wines/:id', wines.findById);

app.listen(3000);
console.log('Express Listening on port 3000...');
