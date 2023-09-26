
## **[Lodash 라이브러리]**

<br>
: JavaScript의 인기있는 라이브러리 중 하나 <br>

: array, collection, data 등의 **데이터 구조**를 쉽게 다루는 데 사용하며, 배열 안의 객체들의 값을 handling(배열, 객체 및 문자열 반복 / 복합적인 함수 생성 등)할 때 유용하다. <br><br>

- **유틸리티 함수 제공** : 다양한 유틸리티 함수를 제공하여 배열, 객체, 문자열, 함수 등과 관련된 다양한 작업을 수행할 수 있게 해줌
- **함수형 프로그래밍 지원** : 고차 함수, 람다 함수를 사용하여 쉬운 데이터 변환 및 조작 가능
- **관련 기능의 그룹화** : 주제별로 함수가 그룹화되어 있어 필요한 함수를 쉽게 찾을 수 있음
- **크로스 브라우저 호환성** : 다양한 브라우저에서 안정적으로 동작
- **자동 커링(Currying) 지원** : 함수의 일부 인수만 전달한 후, 나머지를 나중에 전달함

<br>

**[Lodash 라이브러리 설치]**
```JS
npm i lodash
```
<br><br>


***
## **[cloneDeep 메서드]**

<br>
: Lodash 라이브러리에서 제공하는 함수 중 하나 <br>
: 주어진 객체나 배열을 깊은 복사하는 데 사용된다. <br><br>

- 데이터 보존 : 데이터를 모두 보존하면서 복사를 하므로, 원본 데이터를 수정하여도 복사본 데이터에는 영향을 미치지 않음 (반대도 가능)
- 코드 안정성 : 예기치 않은 동작을 방지하고 코드를 안정적으로 유지할 수 있음

<br><br>

***


## **[Lodash 라이브러리와 cloneDeep 메서드를 이용하여 예제 코드 사용해보기]**
<br>

```JS
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

console.log(obj);
// { a: 1, b: { c: 2 }, func: [Function: func] }

console.log(obj.b.c === newObj.b.c);     // false
```

<br>

`lodash.cloneDeep(obj)` : 'obj' 객체의 깊은 복사본 생성 <br>
`console.log(obj.b.c === newObj.b.c)` : 'obj'와 'newObj'의 `b.c`값 확인 <br><br>

다만, 깊은 복사를 통해 만들어낸 복사본이므로 'newObj'의 값을 수정하여도 'obj'의 값에는 영향을 미치지 않게 된다. 따라서 'obj'의 `b.c`값과 'newObj'의 `b.c`값은 다르다.