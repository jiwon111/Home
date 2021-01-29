var RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnID=109";

var client=require('cheerio-httpcli');

//RSS 다운로드
client.fetch(RSS, {}, function(err, $, res){
    if (err){
        console.log("error"); return;
    }
    //RSS의 전체 경로를 지정하지 않고 CSS 선택자를 지정
    var city = $("location:nth-child(1) > city").text();

    //필요한 항목을 추출해서 표시
    $("location:nth-child(1) > data").each(function(idx){
        
        var tmEf=$(this).find('tmEf').text();
        var wf = $(this).find('wf').text();
        var tmn=$(this).find('tmn').text();
        var tmx=$(this).find('tmx').text();

        console.log(city+" "+tmEf+" "+wf+" "+tmn+"~"+tmx);
    });
});