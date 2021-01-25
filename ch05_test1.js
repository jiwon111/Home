//노드에 기본으로 들어있는 http모듈을 사용하여 웹 서버 객체 만듦
var http=require('http');
var server =http.createServer();
var port=3000;

server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다.:%d', port);
});

/*
createServer()메소드 : 웹 서버 객체 만들기
listen() : 서버를 실행하여 대기시킴
close() : 서버 종료
*/