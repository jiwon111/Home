/*
메모를 기록하여 웹서버로 보내기
express사용
1. 웹서버 실행:cmd에서 node app.js 실행
2. 웹페이지 열기:웹 브라우저에서 localhost:8080/memo.html열기
*/

//express 모듈 불러오기
var express=require('express');
var http=require('http');
var path=require('path');

//express의 미들웨어 불러오기
var bodyParser=require('body-parser');
var static=require('serve-static');

//에러 핸들러 모듈 사용
var expressErrorHandler=require('express-error-handler');

//파일 처리
var fs=require('fs');

//익스프레스 객체 생성
var app = express();

//포트 설정
app.set('port', process.env.PORT||8080);

//body-parser 설정
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//public폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));
app.use(static(path.join(__dirname, '/')));

//라우터 사용하여 라우팅 함수 등록
var router=express.Router();

//메모 저장을 위한 라우팅 함수
router.route('/process/save').post(function(req,res){
    console.log('/process/save 호출됨.');

    try{
        var paramAuthor=req.body.author;
        var paramContents=req.body.contents;
        var paramCreateDate=req.body.createDate;

        console.log('작성자 : '+paramAuthor);
        console.log('내용 : '+paramContents);
        console.log('일시 : '+paramCreateDate);

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('<div><p>메모가 저장되었습니다.</p></div>');
        res.write('<div><input type="button" value="다시 작성" onclick="javascript:history.back()"></div>');
        res.end();
    }catch(err){
        console.dir(err.stack);

        res.writeHead(400, {'Content-Type':'text/html;charset=utf8'});
        res.write('<div><p>메모 저장 시 에러 발생</p></div>');
        res.end();
    }
});

app.use('/', router);

//404 에러 페이지 처리
var errorHandler=expressErrorHandler({
    static:{
        '404':'memo_err.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//웹서버 시작
var server=http.createServer(app).listen(app.get('port'), function(){
    console.log('웹 서버 시작됨-> %s, %s', server.address().address, server.address().port);
});