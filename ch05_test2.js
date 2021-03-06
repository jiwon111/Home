/*이벤트 종류
connection : 클라이언트가 접속하여 연결이 만들어질 떼 발생
request : 클라이언트가 요청할 때 발생
close : 서버를 종료할 때 발생
*/
var http =require('http');
var server=http.createServer();
var port=3000;

server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다. : %d',port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s %d', addr.address, addr.port);
});

server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
});