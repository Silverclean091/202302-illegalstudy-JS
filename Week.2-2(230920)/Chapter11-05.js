
// 아래의 함수 작동시켜 보기

function deepCopy(obj) {
    // 원본 객체가 null이거나, 객체가 아닐 경우 원본 객체를 그대로 반환함
    if (obj === null || typeof obj !== "object") {
            return obj;
    }
    let copy = {};              // 복사본을 저장할 빈 객체 생성
    for (let key in obj) {      // 객체 안의 key들을 순서대로 복사 진행
            copy[key] = deepCopy(obj[key]);     // 재귀 호출을 통해 복사를 진행 (2차원 객체까지 복사 가능)
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

const newObj = deepCopy(obj);           // 복사 진행

newObj.b.c = 3;

console.log(obj);                       // { a: 1, b: { c: 2 }, func: [Function: func] }
console.log(obj.b.c === newObj.b.c);    // false

// 위 함수의 작동 원리에 따르면 2차원 이상의 객체 또한 깊은 복사가 이루어진다.
// 따라서 2차원 객체를 수정하더라도 원본 객체에는 영향을 미치지 않는다.
