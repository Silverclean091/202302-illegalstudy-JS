
// 아래의 코드를 실행해보고 그 이유 생각해보기

const obj = { a: 1 };
const newObj = Object.assign({}, obj);

newObj.a = 2;

console.log(obj);               // { a: 1 }
console.log(obj === newObj);    // false

// 에러 발생
//const obj = {
//    a: 1,
//    b: {
//        c: 2,
//    },
//};

// const newObj = Object.assign({}, obj);   // 에러 발생

// newObj.b.c = 3;      // 에러 발생

console.log(obj);       // { a: 1 }
//console.log(obj.b.c === newObj.b.c);      // 에러 발생