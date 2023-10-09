
// 아래 콘솔로그 결과값 추론하기

var x = 1;
var y = 1;

var x = 100;
var y;

console.log(x);     // 100
console.log(y);     // 1

// 예상 출력은 100, undefined였다.
// y를 아래에서 var y라고 재선언하였지만 값은 할당하지 않았으므로 undefined가 출력될 것이라 예상하였다.
// 그러나 출력값은 예상과 다르게 100, 1이 출력되었다.

// 이유 