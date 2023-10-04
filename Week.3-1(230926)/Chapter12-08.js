
// 재귀함수로 팩토리얼 구현하기

function factorial(n) {
    // n이 0 또는 1일 때, 팩토리얼의 값은 1이 됨
    if (n === 0 || n === 1) 
        return 1;

    // n을 입력받았을 때, n과 n-1의 값을 곱함 (이를 재귀함수를 통해 반복)
    return n * factorial(n - 1);
}

console.log(factorial(10));