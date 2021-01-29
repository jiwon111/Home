var parseString=require('xml2js').parseString;

var xml="<fruits shop='AAA'>"+"<item price='140'>Banana</item>"+"<item price='200'>Apple</item>"+"</fruits>";

//xml 전달
parseString(xml, function(err, result){
    //파싱된 결과에 대한 처리를 작성
    console.log(JSON.stringify(result));
});