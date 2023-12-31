
// 하단의 함수를 실행해보고 결과 값을 적으시오.

// ====================================================

function add1(x, y) {
    console.log(x, y);
    return x + y;
}

add1(2, 5);                     // 2 5
console.log(x, y);              // ReferenceError: x is not defined

// x가 add1 함수 내부에만 정의되어 있기 때문에,
// x와 y의 값을 출력하려고 하면 정의되지 않은 값이라는 에러 메시지가 출력된다.

// ====================================================

function add2(x, y) {
    return x + y;
}

console.log(add2(2));           // NaN

// JS는 인수의 개수와 인자의 개수를 따로 검사하지 않기에 오류 메시지는 출력되지 않는다.
// 다만 y의 값이 전달되지 않았기 때문에 y의 값이 undefined가 된다. 
// 따라서 숫자인 x와 undefined인 y의 값이 더해지면 산술 연산 불가, NaN이 결과로 출력된다.

// ====================================================

function add3(x, y) {
    console.log(arguments);
    return x + y;
}

console.log(add3(2, 5, 10));     

// [Arguments] { '0': 2, '1': 5, '2': 10 }
// 7

// JS는 인수의 개수와 인자의 개수를 따로 검사하지 않기에 오류 메시지는 출력되지 않는다.
// 인수 자체는 3개가 입력되었으므로 인수를 출력하면 3개가 순서대로 출력된다.
// 다만 인자는 입력하는 순서에 맞게 전달되기에, 2 5 10이 순서대로 x에 2, y에 5가 들어가게 된다.
// 그 결과 2와 5에 대해서 add3 함수가 작동하므로, 결과값이 7이 된다.