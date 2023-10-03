
// 아래 두 개의 코드 중, 순수 함수와 비순수 함수 구분하기

// ====================================================

var count = 0;

function increase(n) {
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

// 순수/비순수 함수
// 이유 : 

// ====================================================

var count = 0;

function increase() {
    return ++count;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

// 순수/비순수 함수
// 이유 : 