
// 아래의 코드를 실행해보고 그 이유 생각해보기

const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const newObj = Object.assign({}, obj);   
// Object.assign : 객체를 복사하는 명령어로, 빈 객체에 obj의 속성을 그대로 붙여넣었다.

newObj.b.c = 3;         // 복사한 객체인 newObj의 속성 b의 속성 c 값을 3으로 할당하였다.

console.log(obj);                       // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c);    // true

// Object.assign()은 기본적으로 깊은 복사를 수행한다.
// 다만, 2차원 이상의 객체의 경우 얕은 복사가 수행된다.

// 즉, 위 obj = { a: 1, b: { c: 3 } }; 의 경우,
// a는 1차원 객체이므로 기본적으로 깊은 복사가 수행되지만 b의 경우에는 2차원 객체이므로 얕은 복사가 수행된다.
// 따라서 newObj의 객체의 b 객체 값을 바꾸면 obj의 b 객체에도 영향을 미치게 된다.
// 그 결과, newObj와 obj의 속성값이 함께 변경되었다. 
