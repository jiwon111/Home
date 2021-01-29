var parseString=require('xml2js').parseString;

var xml="<fruits shop='AAA'>"+"<item price='140'>Banana</item>"+"<item price='200'>Apple</item>"+"</fruits>";

//xml 전달
parseString(xml, function(err, result){
    //fruits를 제공하는 가게 이름
    var shop=result.fruits.$.shop;
    console.log("shop="+shop);
    
    //fruits의 이름과 가격 표시
    var items=result.fruits.item;
    for (var i in items){
        var item=items[i];
        console.log("-- name="+item._);
        console.log(" price="+item.$.price);
    }
});