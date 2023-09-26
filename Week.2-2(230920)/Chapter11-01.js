
// 아래의 코드를 실행해보고 그 이유 생각해보기

const original = [
    [18, 18, 18, 18],
    [19, 19, 19, 19],
    [20, 20, 20, 20],
    [21, 21, 21, 21],
];

const copy = original.slice();

console.log(JSON.stringify(original) === JSON.stringify(copy));     // true

copy[0][90] = 99;
copy[2].push("02");

console.log(JSON.stringify(original) === JSON.stringify(copy));     // true

console.log(original);
console.log(copy);

/*
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