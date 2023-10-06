
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

// 순수 함수
// 이유 : 매개변수 n을 전달받은 후, n의 값을 1 증가시킨 뒤에 n의 값을 반환한다.
// 따라서 바깥의 변수인 count가 직접적으로 영향을 받지 않으므로 순수 함수이다.

// ====================================================

var count = 0;

function increase() {
    return ++count;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

// 비순수 함수
// 이유 : 외부 변수인 count를 전달받고, 그에 직접 접근하여 값을 변경한다.
// 따라서 바깥의 변수인 count가 직접적으로 영향을 받으므로 비순수 함수이다.
