const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const sendFileBack = (res, file) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
}

const server = http.createServer((req, res) => {
    // console.log('request made');
    // console.log(req.url, req.method); // / GET
    console.log(req.url, req.method);

    // lodash
    const num = _.random(0, 20);
    console.log(num);


    const greet = _.once(() => {
        console.log("hello");
    })

    // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    // res.write('<head><link rel = "stylesheet" href="#"></head>');
    // res.write('<p>hello, ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // res.end();

    // send an html file
    // './views/index.html'
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader("Location", "about");
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    sendFileBack(res, path);
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})