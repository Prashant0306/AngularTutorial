var express = require('express');
var app = express();
var path = require('path');

app.get("/", function(req, res){
   res.sendFile(path.join(__dirname,"index.html"));
});
//for static files images,css,scripts
app.get("*.*", function(req, res){
    res.sendFile(path.join( __dirname+req.url));
});
//for directly past url
app.get('*', function(req, res){
     res.sendFile(path.join(__dirname,"index.html"));
});

app.listen(9000);