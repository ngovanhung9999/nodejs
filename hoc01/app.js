const http = require('http');
const fs = require('fs');

const config = require('./module/config');

http.createServer(function(req, res) {
    fs.readFile('./Home.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found !');
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(config.post);