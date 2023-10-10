
// 아래 코드를 실행해보고, 왜 그렇게 나오는지 이유를 설명하시오.

var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo();      // 1
bar();      // 1

// JS에서는 함수를 어디에서 정의했는지에 따라 상위 스코프를 결정한다.
// foo() 함수 내에서 bar() 함수를 실행하더라도, 
// 선언된 곳의 상위 스코프는 전역 변수인 var x = 1이므로 1을 출력한다.
