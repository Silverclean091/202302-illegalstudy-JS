
// 아래의 코드를 실행해보고 그 이유 생각해보기

const obj = { a: 1 };
const newObj = Object.assign({}, obj);
// Object.assign : 객체를 복사하는 명령어로, 빈 객체에 obj의 속성을 그대로 붙여넣었다.

newObj.a = 2;       // 복사한 객체인 newObj의 속성 a의 값을 2로 할당하였다. 

console.log(obj);               // { a: 1 }
console.log(obj === newObj);    // false

// Object.assign()은 기본적으로 깊은 복사를 수행한다.
// 따라서 newObj의 속성 값을 바꾸어도 obj에는 영향을 미치지 않는다.
// 그 결과, newObj의 속성값만 변경되었다. 