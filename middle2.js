var express=require('express');
var http=require('http');

var app=express();//app객체를 만듬
app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함.');
    
    req.user='mike';
    next();//다음 미들웨어로 넘김
});

app.use('/', function(req, res, next){
    console.log('두 번째 미들웨어에서 요청을 처리함.');

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서'+req.user+'가 응답한 결과입니다.</h1>');
});