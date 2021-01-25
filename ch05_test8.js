var resData='';
var http=require('http');

var req=http.request(opts, function(res){
    res.on('data', function(chunk){
        resData+=chunk;
    });
});

res.on('end', function(){
    console.log(resData);
});