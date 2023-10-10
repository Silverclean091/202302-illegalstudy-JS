// function을 사용하여 120줄 이상 코드 작성하기
// 콜백 필수, 재귀함수 필수, 화살표 생성 방식 필수 

// =========================================================

// 계산기 함수 

function calculator(num1, num2, op) {
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.log('0으로 나눌 수 없습니다.');
                return;
            }
        default:
            console.log("오류 : 유효하지 않은 연산자");
            return;        
    }
}

console.log(calculator(10, 3, '-'));

// =========================================================

// 피보나치 수열 함수

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10));

// =========================================================

// setTimeout을 사용한 콜백 함수

setTimeout(function() {
    console.log("10초가 지났습니다!");
}, 10000);

// =========================================================

// 두 개의 값 중, 더 큰 수를 출력해주는 화살표 함수

const max = (num1, num2) => {
    if (num1 >= num2) { 
        return num1; 
    } else {
        return num2;
    }
};

console.log(max(7, 13));

// =========================================================

// 사용자의 학번과 군필 유무를 보고 학년을 계산해주는 함수

function gradeCalculator(id, gunbye) {
    if ((Math.floor(id / 1000000) === 23 && gunbye === 0) || (Math.floor(id / 1000000) === 21 && gunbye === 1))
        return 1;
    if ((Math.floor(id / 1000000) === 22 && gunbye === 0) || (Math.floor(id / 1000000) === 20 && gunbye === 1))
        return 2;
    if ((Math.floor(id / 1000000) === 21 && gunbye === 0) || (Math.floor(id / 1000000) === 19 && gunbye === 1))
        return 3;
    if ((Math.floor(id / 1000000) === 20 && gunbye === 0) || (Math.floor(id / 1000000) === 18 && gunbye === 1))
        return 4;
}

// 군필이면 1, 아니면 0
console.log(gradeCalculator(21114963, 0));

// =========================================================

// 헴을 햄으로 바꾸어주는 함수

function hemTOham(strText) {
    return strText.replace(/헴/g, '햄');
}

const originalTXT = '헴식이는 헴버거를 먹으면 헴식헴식하고 운다.';
const changeTXT = hemTOham(originalTXT);
console.log(changeTXT);

// =========================================================

// 별찍기 함수 

function starMaker(n) {
    for (let i = 1; i <= n; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

starMaker(10);

// =========================================================

// 문장 안에 햄이 있는지 찾아주는 함수 

function hamSearch(hamText) {
    if (hamText.includes('햄') === true) {
        console.log("햄식이 찾았다!!!!");
    } else {
        console.log("햄식이 숨었다....ㅠ");
    }
}

hamSearch("헴헴헴헴헴헴헴헴햄헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴헴")

// =========================================================

// 369 함수

function samyukgu(number) {

    if ((number === 0) || isNaN(number)) {
        console.log("잘못된 입력");
    }

    for (let i = 1; i <= number; i++) {

        if (i >= 10) {

            var temp1 = i % 10;
            var temp2 = Math.floor(i / 10);

            if (((temp1 % 3 === 0) && (temp1 !== 0)) || (temp2 % 3 === 0))
                console.log("짝");
            else
                console.log(i);

        } else {
            if (i % 3 === 0) {
                console.log("짝");
            } else {
                console.log(i);
            }
        }
    }
}

samyukgu(67);

// =========================================================