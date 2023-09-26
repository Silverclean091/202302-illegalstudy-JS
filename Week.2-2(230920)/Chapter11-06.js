
// Lodash 라이브러리를 사용하여 예제 코드 실행해보기
// Lodash 라이브러리 설치 : npm i lodash 

const lodash = require("lodash");

const obj = {
    a: 1,
    b: {
        c: 2,
    },
    func: function () {
        return this.a;
    },
};

const newObj = lodash.cloneDeep(obj);

newObj.b.c = 3;

console.log(obj);                        // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c);     // false
