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
    if (!!req.body.title) {
        var fpath = req.body.title + '.json'
        fs.writeFile(fpath, req.body.payload, err => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('thanks');
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)
