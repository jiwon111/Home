var client=require('cheerio-httpcli');

//다운로드
var url="http://jpub.tistory.com";
var param={};
//fetch의 콜백함수
//err:오류 정보
//$:가져온 데이터
//res:서버의 응답정보
client.fetch(url, param, function(err, $, res){
    //에러 체크
    if (err){console.log("Error:", err); return;}

    //다운로드한 결과를 출력
    var body=$.entityHtml();
    console.log(body);
});