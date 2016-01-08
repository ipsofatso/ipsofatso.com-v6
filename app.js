var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address.replace('::ffff:','');
    var port = server.address().port;

    console.log('ipsofatso.com app listening at http://%s:%s', host, port);
});
