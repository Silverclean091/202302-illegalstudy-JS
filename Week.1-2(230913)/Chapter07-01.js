
// 아래의 코드 실행해보기.

var a = '1';

console.log(+a, typeof +a);     // 1 number : 1이 문자열에서 숫자로 변환
console.log(a, typeof a);       // 1 string : '1'은 문자열이므로 string 타입 

a = true;
console.log(+a, typeof +a);     // 1 number : true가 숫자로 변환, true는 1
console.log(a, typeof a);       // true boolean : true는 boolean 타입

a = false;
console.log(+a, typeof +a);     // 0 number : false가 숫자로 변환, false는 0
console.log(a, typeof a);       // false boolean : false는 boolean 타입

a = 'Hi';
console.log(+a, typeof +a);     // NaN number
// 'Hi'를 숫자로 변환하려 하였으나, 이는 산술 연산 불가이므로 NaN으로 출력 
// NaN 타입은 숫자 타입으로 분류되어 있으므로 number 출력
console.log(a, typeof a);       // Hi string : 'Hi'는 문자열이므로 string 타입 

// +는 문자열을 숫자로 변환해주는 연산 작업도 수행한다.