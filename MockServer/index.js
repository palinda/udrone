var express = require('express');
var bodyParser = require('body-parser');
var alasql = require('alasql');
var fs = require('fs');
var fileName = './data/global_repo.json';
var globalRepoFile = require(fileName);

var tableFile = './data/city_inspections.json';
var tableData = require(tableFile);

var app = express();
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('www'));

var port = 9000;

// start the server
// app.listen(port);
app.listen(port, "0.0.0.0");
console.log('Server started! At http://localhost:' + port);

app.post('/res/orderCount', function(req, res) {
    res.status(200).json({
        'count': Math.ceil((Math.random() * 100 + 1))
    });
})

app.post('/res/fundCount', function(req, res) {
    res.status(200).json({
        'deposit': Math.ceil((Math.random() * 100 + 1)),
        'withdraw': Math.ceil((Math.random() * 100 + 1))
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

app.post('/res/userQuery', function(req, res) {

    const query = req.body;
    const dataList = [];

    var queryStr = 'SELECT * FROM ? ';
    var queryStrCount = 'SELECT COUNT(*) AS NUMBER FROM ? ';

    if (query.filterString != undefined || query.filters != undefined) {
        queryStr += 'where ';
        queryStrCount += 'where ';
    }

    if (query.filterString != undefined) {
        queryStr += ' ' + query.filterString + ' ';
        queryStrCount += ' ' + query.filterString + ' ';
    }
    if (query.filters != undefined) {
        for (var i in query.filters) {
            var filter = query.filters[i];

            if (i != 0) {
                queryStr += ' AND ';
                queryStrCount += ' AND ';
            }
            queryStr += filter.key;
            queryStrCount += filter.key;
            if (filter.operator == 'EQUAL') {
                queryStr += ' = ';
                queryStrCount += ' = ';
            } else if (filter.operator == 'NOT_EQUAL') {
                queryStr += ' != ';
                queryStrCount += ' != ';
            }
            queryStr += filter.value;
            queryStrCount += filter.value;
        }
    }

    if (query.sorts != undefined) {
        queryStr += ' ORDER BY ';
        for (var i in query.sorts) {
            var sort = query.sorts[i];

            if (i != 0) {
                queryStr += ', ';
            }

            queryStr += sort.field;
            if (sort.isDesc)
                queryStr += ' DESC';
        }
    }
    console.log('queryStr----------------' + queryStr);
    queryStr += (' LIMIT ' + query.limit + ' OFFSET ' + query.offset);

    var data = alasql(queryStr, [tableData]);

    var countData = alasql(queryStrCount, [tableData]);
    console.log('COUNT----------------' + JSON.stringify(countData));

    res.status(200).json({
        'data': data,
        'total': countData[0].NUMBER,
        'totalFilter': countData[0].NUMBER
    });

})

app.post('/res/globalComponentRepo/:id', function(req, res) {

    const compDef = req.body;

    console.log('globalComponentRepo:' + req.params['id']);
    if (globalRepoFile[req.params['id']] === undefined) {
        globalRepoFile[req.params['id']] = [];
    }
    let index = globalRepoFile[req.params['id']].findIndex(o => o.id === compDef['id']);

    if (index < 0) {
        globalRepoFile[req.params['id']].push(compDef);
    } else {
        globalRepoFile[req.params['id']].splice(index, 1, compDef);
    }
    
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