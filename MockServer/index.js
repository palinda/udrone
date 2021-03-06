var express = require('express');
var bodyParser = require('body-parser');
const http = require('http');
var alasql = require('alasql');
var fs = require('fs');
var WebSocket = require('ws');
var fileName = './data/global_repo.json';
var globalRepoFile = require(fileName);

var tableFile = './data/city_inspections.json';
var tableData = require(tableFile);

var app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

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
wss.on('connection', function connection(ws, req) {
   
    ws.on('message', function incoming(msg) {

        console.log('received: %s', msg);
        msg = JSON.parse(msg);
      

      let reply;
      if (msg['__path']) {
          switch(msg['__path']) {
              case 'orderCount':{
                reply = onOrderCount();
                break;
              }
              case 'fundCount': {
                  reply = onFundCount();
                break;
              }
              case 'orderCountHist': {
                  reply = onOrderCountHist(msg);
                  break;
              }
              case 'userQuery': {
                reply = onUserQuery(msg);
                break;
              }
              case 'globalComponentRepo': {
                  reply = onGlobalComponent(msg, msg[id]);
                  break;
              }
              case 'global_repo.json': {
                  reply = globalRepoFile;
                  break;
              }
          }

          reply['__reqID'] = msg['__reqID'];
          console.log('Reply:', reply);
          ws.send(JSON.stringify(reply));
      }
    });

  });
   
  server.listen(port+1, function listening() {
    console.log('Listening on %d', server.address().port);
  });

console.log('Server started! At http://localhost:' + port);

app.post('/res/orderCount', function(req, res) {
    res.status(200).json(onOrderCount());
})

function onOrderCount() {
    return {
        'count': Math.ceil((Math.random() * 100 + 1))
    };
}

app.post('/res/fundCount', function(req, res) {
    res.status(200).json(onFundCount());
})

function onFundCount() {
    return {
        'deposit': Math.ceil((Math.random() * 100 + 1)),
        'withdraw': Math.ceil((Math.random() * 100 + 1))
    };
}
app.post('/res/orderCountHist', function(req, res) {
    res.status(200).json(onOrderCountHist(req.body));
})

function onOrderCountHist(req) {
    const dyMsg = req;
    const dataList = [];

    console.log('Request:' + dyMsg);
    for (let i = 0; i < dyMsg['limit']; i++) {
        dataList.push({ 'key': 'X ' + i, 'value': Math.ceil((Math.random() * 100 + 1)) });
    }
    return {
        'data': dataList
    };
}

app.post('/res/userQuery', function(req, res) {
    res.status(200).json(onUserQuery(req.body));
})

function onUserQuery(req) {
    const query = req;
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

    return {
        'data': data,
        'total': countData[0].NUMBER,
        'totalFilter': countData[0].NUMBER
    };
}

app.post('/res/globalComponentRepo/:id', function(req, res) {
    res.status(200).json(onGlobalComponent(req.body, req.params['id']));
})

function onGlobalComponent(req, id) {
    const compDef = req;
    
        console.log('globalComponentRepo:' + id);
        if (globalRepoFile[id] === undefined) {
            globalRepoFile[id] = [];
        }
        let index = globalRepoFile[id].findIndex(o => o.id === compDef['id']);
    
        if (index < 0) {
            globalRepoFile[id].push(compDef);
        } else {
            globalRepoFile[id].splice(index, 1, compDef);
        }
        
        fs.writeFile(fileName, JSON.stringify(globalRepoFile), function(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(globalRepoFile));
            console.log('writing to ' + fileName);
        });

        return compDef;
}

app.post('/res/global_repo.json', function(req, res) {
    res.status(200).json(globalRepoFile);
})

app.post('/res/usersave', function(req, res) {
    res.status(200).json(req.body);
})