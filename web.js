var http=require("http")
var domain = process.env.DOMAIN || '';
var port = process.env.PORT || 5000;

var svr = http.createServer(function(req,res){
    res.writeHead(200, {"content-type":"text/plain"})
    res.end("Hello world! you can you up!")
})
svr.listen(port)
