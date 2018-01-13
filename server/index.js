var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var fs = require('fs');
var app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(compression());

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    console.log('GET /');
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)
