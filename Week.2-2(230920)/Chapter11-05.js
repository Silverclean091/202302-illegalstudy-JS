
// 아래의 함수 작동시켜 보기

function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
            return obj;
    }

    let copy = {};
    for (let key in obj) {
            copy[key] = deepCopy(obj[key]);
    }
    return copy;
}

const obj = {
    a: 1,
    b: {
            c: 2,
    },
    func: function () {
            return this.a;
    },
};

const newObj = deepCopy(obj);

newObj.b.c = 3;

console.log(obj);                       // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c);    // false