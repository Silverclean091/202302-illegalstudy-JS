
<br>

***
## **[표현식 구분]**
### **아래 코드에서 표현식인 부분과 표현식이 아닌 부분에 대해서 구분하시오.**

<br>

```JS
var x;
x = 100;
```
```JS
var a = y = 100;
console.log(a);
```
```JS
var foo = var x;
```

<br>

표현식 : 값으로 평가될 수 있는 문으로, 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조하는 것이 가능<br>
참고로, 표현식에 변수를 할당하면 에러가 발생하지 않는다. <br>