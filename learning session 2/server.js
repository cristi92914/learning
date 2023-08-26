var express = require('express')
var app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
})

var port = 3000

var server = app.listen(port, () => {
    console.log('Express server' + port);
})

