
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

: 이유