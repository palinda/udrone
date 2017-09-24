var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var fileName = './data/global_repo.json';
var globalRepoFile = require(fileName);

var app = express();
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = 9000;

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.post('/res/orderCount', function(req, res) {
    res.status(200).json({
        'count': Math.ceil((Math.random() * 100 + 1))
    });
})

app.post('/res/orderCountHist', function(req, res) {

    const dyMsg = req.body;
    const dataList = [];

    console.log('Request:' + dyMsg);
    for (let i = 0; i < dyMsg['limit']; i++) {
        dataList.push({ 'key': 'X ' + i, 'value': Math.ceil((Math.random() * 100 + 1)) });
    }

    res.status(200).json({
        'data': dataList
    });

})

app.post('/res/globalComponentRepo/:id', function(req, res) {

    const compDef = req.body;

    console.log('globalComponentRepo:' + req.params['id']);
    if (globalRepoFile[req.params['id']] === undefined) {
        globalRepoFile[req.params['id']] = [];
    }

    globalRepoFile[req.params['id']].push(compDef);
    fs.writeFile(fileName, JSON.stringify(globalRepoFile), function(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(globalRepoFile));
        console.log('writing to ' + fileName);
    });

    res.status(200).json(compDef);

})

app.post('/res/global_repo.json', function(req, res) {
    res.status(200).json(globalRepoFile);
})