
// 하단의 코드를 실행하고, 에러가 발생한다면 왜 발생하는지 이유 서술하기

let a = 1;

{
    let a = 2;
    let b = 3;
}

console.log(a);     // 1
console.log(b);     // ReferenceError: b is not defined

// 이유 