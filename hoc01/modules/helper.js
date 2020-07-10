const fs = require('fs');


module.exports = {
    renderHTML: function(path, res) {
        fs.readFile(path, (err, data) => {
            if (err) {
                render404(res)
            } else {
                res.write(data);
            }
            res.end();
        });
    },
    render404: function(res) {
        res.writeHead(404);
        res.write('file not found !');
    }
}