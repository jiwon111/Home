//url에 있는 파일을 savepath에 다운로드
//다운로드할 URL을 지정
var url="http://jpub.tistory.com/";

//저장할 위치를 지정
var savepath="test.html";

//사용 모듈 정의
var http=require('http');
var fs=require('fs');

//저장할 파일 이름 지정
var outfile = fs.createWriteStream(savepath);

//비동기로 URL의 파일 다운로드
http.get(url, function(res){
    res.pipe(outfile);
    res.on('end', function(){
        outfile.close();
        console.log("ok");
    });
});