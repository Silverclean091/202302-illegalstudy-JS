
// 아래의 코드를 실행해보고 그 이유 생각해보기

const original = [
    [18, 18, 18, 18],
    [19, 19, 19, 19],
    [20, 20, 20, 20],
    [21, 21, 21, 21],
];

const copy = original.slice();
// slice() 메서드는 얕은 복사를 수행한다.
// 따라서 복사본인 copy를 수정하면 본래 데이터인 original에도 영향을 끼친다.

console.log(JSON.stringify(original) === JSON.stringify(copy));     // true
// JSON.stringify : 배열의 JSON 표현을 문자열로 변환하겠다는 의미
// original과 copy의 데이터가 같은지 비교한다. : true 

copy[0][90] = 99;     // [0][99]에 99의 요소를 할당 
copy[2].push("02");   // [2]의 가장 끝에 '02'값 할당 

console.log(JSON.stringify(original) === JSON.stringify(copy));     // true
// original과 copy의 데이터가 같은지 비교한다. : true
// copy의 데이터만 변경하였으나, 얕은 복사로 만들어졌으므로 상호 영향을 끼친다. 

console.log(original);
console.log(copy);

/* 위의 이유들로 인하여 둘의 출력값은 같게 나온다.

[
  [ 18, 18, 18, 18, <86 empty items>, 99 ],
  [ 19, 19, 19, 19 ],
  [ 20, 20, 20, 20, '02' ],
  [ 21, 21, 21, 21 ]
]

[
  [ 18, 18, 18, 18, <86 empty items>, 99 ],
  [ 19, 19, 19, 19 ],
  [ 20, 20, 20, 20, '02' ],
  [ 21, 21, 21, 21 ]
]
 */