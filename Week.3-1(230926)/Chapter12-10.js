
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

// 비순수 함수
// 이유 : 매개변수 n을 전달받은 후, n의 값을 1 증가시킨 뒤에 n의 값을 반환한다.
// 따라서 바깥의 변수인 count가 직접적으로 영향을 받게 되므로, 비순수 함수이다.
// 또한 n의 값을 1 변경한 다음 그 값을 count로 정해버리므로, 함수의 수행 과정이 매번 달라진다.

// ====================================================

var count = 0;

function increase() {
    return ++count;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

// 순수 함수
// 이유 : 외부 변수인 count에 직접 접근하여 값을 변경한다.
// 다만 함수 외부의 어떤 것을 변경하거나 의존하지는 않기에, 순수 함수이다.
// 또한 count라는 변수를 1 증가시키는, 늘 같은 기능을 수행하므로 순수 함수이다.
