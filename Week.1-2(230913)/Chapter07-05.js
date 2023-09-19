
// typeof 연산자를 사용하여 아래의 반환값들을 모두 나타내보기

// string
console.log(typeof 'Hi');

// number
console.log(typeof 5);

// boolean
console.log(typeof true);

// undefined
console.log(typeof x);

// symbol
var mySymbol = Symbol('hehe');
console.log(typeof mySymbol);

// object
const person = {name: 'Kim', age:20}
console.log(typeof person);

// function
function addNum(a, b) {return a+b;}
console.log(typeof addNum);