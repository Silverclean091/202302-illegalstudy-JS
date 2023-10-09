
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

// 이유