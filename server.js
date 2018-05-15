var express = require('express'),
    morgan = require('morgan'),
    bodyparser = require('body-parser'),
    actorRecruits = require('./routes/actorRecruits');

var app = express();


app.use(morgan('short'));
// app.use(function(req,res){
//   res.send('<h1>hello ghun</h1>');
// });
app.get('/actorRecruits', actorRecruits.findAll);
// app.get('/wines/:id', wines.findById);

app.listen(3000);
console.log('Express Listening on port 3000...');
