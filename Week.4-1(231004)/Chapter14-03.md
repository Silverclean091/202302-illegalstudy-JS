***
## **[전역 변수 사용 억제법]**
### **아래 키워드로 전역 변수 사용 억제법 찾아보기**
<br>

**즉시 실행 함수** <br>
```JS
(function () {
    var foo = 10;
})
console.log(foo);   // 참조 오류
```
: `()`를 사용하여 즉시 실행 함수를 만들어내면, 즉시 실행 함수 내부로 스코프가 한정된다. 그렇기에 즉시 실행 함수의 지역 변수가 되고, 즉시 실행 함수가 끝나면 생명 주기도 끝난다. <br><br>

**네임스페이스 객체** <br>
```JS
var MYAPP = {};
MYAPP.name = 'kang';
console.log(MYAPP.name);    // kang

var MYAPP = {};
MYAPP.person = {
    name: 'kang',
    age: 22,
};

console.log(MYAPP.person.name); // kang
```
: 네임스페이스는 코드 내에서 정의한 함수인지, 외부 라이브러리에서 정의한 함수인지 등 문맥을 구분해주는 역할을 한다. 네임스페이스를 사용하면 코드에서 이름이 서로 충돌하는 문제를 막을 수 있다. <br><br>

**모듈 패턴** <br>
```JS
const Number = (function() {
    // private 변수가 됨
    var num = 0;
    return {
        increase() {
            return ++num;;
        },
        decrease() {
            return --num;
        }
    }
})

console.log(Number.number);     // undefined
console.log(Number.increase()); // 1
console.log(Number.increase()); // 2
console.log(Number.decrease()); // 1
console.log(Number.decrease()); // 0
```
: 모듈 패턴을 사용하면 전역 변수의 억제와 캡슐화까지 구현할 수 있다. 캡슐화란 객체의 상태를 나타내는 프로퍼티와 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것이며, 정보 은닉에도 사용한다. <br><br>

**ES6 모듈** <br>
```JS
<script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script>
```
: ES6 모듈을 사용하면 전역변수를 사용할 수 없다. ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다. 예를 들어 `script` 태그에 `type="module"` 어트리뷰트를 추가하면, 로드된 JavaScript 파일은 모듈로서 동작한다. 