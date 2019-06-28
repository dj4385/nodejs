const http = require('http');

var server = http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Hello server");
})

server.listen(3000, ()=>{
    console.log("Server started..");
})