
// NaN이 아닌 nan, NAN 같은 값을 변수에 대입하면 어떻게 나올까?

console.log(typeof nan);
console.log(typeof NAN);
console.log(typeof NaN);

// NaN이라고 대소문자를 구별하였을 경우에는 number이, 
// nan 혹은 NAN이라고 대소문자를 구별하지 않았을 경우에는 undefined가 출력된다.

// 데이터 타입의 경우, NaN은 Not-a-Number을 의미하지만 타입 자체는 number로 분류된다.