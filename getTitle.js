phantom.casperPath='./node_modules/casperjs';
phantom.injectJs('./node_modules/casperjs/bin/bootstrap.js');

//웹 사이트로서의 타이틀을 표시
var TARGET_URL = "http://jpub.tistory.com";

//CasperJS의 객체 생성
var casper = require('casper').create();

//지정한 웹 사이트 열기
casper.start(TARGET_URL, function(){
    //타이틀 출력
    this.echo(casper.getTitle());
});

//처리 수행
casper.run();