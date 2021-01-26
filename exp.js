var express=require('express');
var http=require('http');
var app=express();
app.set('port', process.env.PORT||3000);
http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스 서버를 시작했습니다.'+app.get('port'));
});
/*
익스프레스 객체의 주요 메소드와 속성
set(name, value)-서버 설정을 위한 속성 지정
get(name)-서버 설정을 위해 지정한 속성을 꺼내옴
use(path, function)-미들웨어 함수 사용
get(path, function)-특정 패스로 요청된 정보를 처리
env-서버 모드를 설정
views-뷰들이 들어 있는 폴더/폴더 배열 설정
view engine-디폴트로 사용할 뷰 엔진을 설정
*/