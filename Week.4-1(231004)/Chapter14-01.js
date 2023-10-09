
// 아래 콘솔로그에서 무엇이 나올지 실행해보자.

var x = 'globaaaal';

function banana() {
    console.log(x);     // undefined
    var x = 'locccccccccccccccal';
}

banana();
console.log(x);         // globaaaal

// 이유