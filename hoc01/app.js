const http = require('http');
const url = require('url')
    //
const config = require('./modules/config');
const helper = require('./modules/helper');


http.createServer(function(req, res) {
    const path = url.parse(req.url).pathname;
    switch (path) {
        case '/':
        case '/Home':
            helper.renderHTML('./views/Home.html', res);
            break;
        case '/About':
            helper.renderHTML('./views/About.html', res);
            break
        default:
            helper.render404(res);
            res.end();
            break;
    }
}).listen(config.post);