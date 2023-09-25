
// 아래의 코드를 실행해보고 왜 결과값이 그렇게 나오는지 생각해보기

// ========================================================

var person = {
    firstName: 'turtle',
//  last-name: 'park'
};
console.log(person);
// SyntaxError: Unexpected token '-'
// 네이밍 규칙을 지키는 경우가 아니기에 따옴표로 감싸야 함

// ========================================================

var word1 = {
    var: '',
    function: ''
};
console.log(word1);
// 출력 : { var: '', function: '' }
// var과 function에 아무런 값도 들어있지 않기 때문

// ========================================================

// 프로퍼티 키 동적 생성
var objES5 = {}
var keyES5 = 'ES5'
objES5[keyES5] = 'world';
console.log(objES5);
// 출력 : { ES5: 'world' }
// ES5 문법을 사용하여 객체를 동적으로 생성하였음
// 빈 객체 objES5를 생성한 다음, keyES5라는 변수를 선언하고 'ES5'라는 값 할당
// 이후 keyES5를 objES5의 key로 사용하도록 함, 이 상태로 출력

// ========================================================

// 계산된 프로퍼티 이름
var keyES6 = 'HELL';
var objES6 = {[keyES6]: 'o'};
console.log(objES6);
// 출력 : { HELL: 'o' }
// 문자열 'HELL'을 변수 keyES6에 할당한 다음, objES6 객체 생성
// 생성한 객체에 keyES6을 key로 지정, 그 값을 'o'로 하고 출력

// ========================================================

var emptyObj = {
    '' : ''
};
console.log(emptyObj);
// 출력 : { '': '' }
// 객체를 생성한 후, key의 이름을 ''(공백)으로 하여 선언
// 값 또한 ''(공백)으로 선언한 다음, 출력

// ========================================================

var numObj = {
    1 : 0,
    2 : 1,
    3 : 2
};
console.log(numObj);
// 출력 : { '1': 0, '2': 1, '3': 2 }
// key를 각각 1, 2, 3으로 하고 값을 0, 1, 2로 하여 객체 생성

// ========================================================

var duplicateObj = {
    name : 'park',
    name : 'kim'
};
console.log(duplicateObj);
// 출력 : { name: 'kim' }
// name이라는 key를 생성하여 값을 'park'으로 선언하였으나,
// 이후 'kim'이라는 값을 재할당하였으므로 이를 반영하여 출력됨