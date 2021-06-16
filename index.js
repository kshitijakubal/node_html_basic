const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/index.html','utf-8');
    myReadStream.pipe(res)
}).listen(8000)