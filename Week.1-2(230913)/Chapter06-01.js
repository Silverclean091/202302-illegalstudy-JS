var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary, octal, hex);

if(binary === hex) console.log(true);
if(binary === octal) console.log(true);

// JS에서 숫자를 모두 다 실수로 측정한다면,
// 2진수, 8진수, 16진수를 출력한다면 어떤 식으로 될까?

// 출력값 : 65 65 65 ture ture

// 이유 : JS에서는 모든 숫자가 부동 소수점으로 저장된다. 
// 따라서 입력 방식이 어떻든 내부적으로 저장하는 방식은 같으므로, 
// 모두 10진수인 65로 동일하게 출력된다.
// 2진수 0b01000001와 16진수 0x41는 내부적으로 같은 값이므로 조건문은 true가 출력된다.
// 2진수 0b01000001와 8진수 0o101는 내부적으로 같은 값이므로 조건문은 true가 출력된다.