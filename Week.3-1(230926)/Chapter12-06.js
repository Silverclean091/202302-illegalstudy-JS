
// 하단의 함수를 실행해보고 결과 값을 적으시오.

// ====================================================

function add1(x, y) {
    console.log(x, y);
    return x + y;
}

add(2, 5);
console.log(x, y);              // 

// ====================================================

function add2(x, y) {
    return x + y;
}

console.log(add2(2));           // 

// ====================================================

function add3(x, y) {
    console.log(arguments);
    return x + y;
}

console.log(add(2, 5, 10));     // 
