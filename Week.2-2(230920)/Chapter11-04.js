
// 아래의 코드를 실행해보고 그 이유 생각해보기

const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const newObj = { ...obj };

newObj.b.c = 3;

console.log(obj);                       // { a: 1, b: { c: 3 } }
console.log(obj.b.c === newObj.b.c);    // true