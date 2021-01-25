var net=require('net');
//소켓 서버 생성
var server=net.createServer(function (socket){
    //연결된 클라이언트 정보 확인
    socket.name=socket.remoteAddress+":"+socket.remotePort;
    console.log('클라이언트 연결됨 -> '+socket.name);

    //클라이언트로부터 메시지를 받았을 때 발생하는 이벤트
    socket.on('data', function(data){//data는 클라이언트의 write로부터 옴
        console.log('클라이언트로부터 받은 데이터: '+data);

        //받은 메시지를 돌려줌
        socket.write(data+' from server.');
    });

    //클라이언트 연결이 끊어진 경우
    socket.on('end', function(){
        console.log('클라이언트로부터 연결 끊어짐->'+socket.name);
    });


});

//소켓 서버 실행
var port=3000;
server.listen(port);

console.log('소켓 서버 실행됨'+port);

var net=require('net');

var hostname='localhost';
var port=3000;

//서버에 연결
var client = new net.Socket();
client.connect(port, hostname, function(){
    console.log('서버에 연결됨->'+hostname+':'+port);
    client.write('안녕');
});

//서버로부터 데이터를 받았을 때 발생하는 이벤트
client.on('data', function(data){
    console.log('서버로부터 받은 데이터 ->'+data);

    //클라이언트 연결 종료
    client.destroy();
});
client.on('close', function(){
    console.log('연결 끊어짐');
});