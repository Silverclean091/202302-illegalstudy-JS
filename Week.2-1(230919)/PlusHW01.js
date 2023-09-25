
// 반복문이나 제어문을 사용하여 코드 작성하기
// 계산기 코드 작성 (정수 1과 정수 2, 연산자를 입력받은 후 연산 결과 출력)

// ============================ readline ============================
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// ============================ readline ============================

let num1, num2, op;

rl.question('정수 1 입력 : ', (n1) => { 
    num1 = parseInt(n1);
    rl.question('정수 2 입력 : ', (n2) => { 
        num2 = parseInt(n2);
        rl.question('연산 종류 입력(+-*/) : ', (opr) => {
            op = opr;
            calculation();
            rl.close();
        });
    });
});

function calculation() {
    let result;

    switch(op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log('오류 : 연산 불가');
                return;
            }
            break;
        default:
            console.log("오류 : 유효하지 않은 연산자");
            return;
    }

    console.log('연산 결과 : ', result);
}