
***
## **[Function 생성자 함수]**
### **하단의 에러는 왜 일어날까?**

<br>

**add1 함수**
```JS
var add1 = (function() {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    }
}());

console.log(add1(1, 2));        // 13
```

**출력 결과**
```
13
```

<br>

**add2 함수**
```JS
var add2 = (function() {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a');
}());

console.log(add2(1, 2));
```

**출력 결과 (에러)**
```
ReferenceError: a is not defined
```

<br>

: add2의 new Function을 사용하여 생성된 함수는 외부의 값에 접근할 수 없다. 따라서 `new Function('x', 'y', 'return x + y + a');`의 경우, a의 값에 접근할 수 없으므로 a가 정의되어 있지 않다는 에러 메시지가 출력된다. 