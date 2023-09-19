var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary, octal, hex);

if(binary === hex) console.log(true);

// JS에서 숫자를 모두 다 실수로 측정한다면,
// 2진수, 8진수, 16진수를 출력한다면 어떤 식으로 될까?

// 출력값 : 