var express =require('express');
var morgan=require('morgan');
var exphbs = require('express-handlebars');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

//Middlwares
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port,() => {
    console.log('Port running on 3000')
})