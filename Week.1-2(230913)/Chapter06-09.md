
<br>

***
## **[ECMAScript 사양의 데이터 타입 규정]**

### **ECMAScript 사양은 문자열과 숫자 타입 외에는 명시적으로 규정하고 있지 않다.**
### **그렇다면 해당 데이터 타입들 외에는 어떤 식으로 계산되고 있는가?**
<br>

ECMAScript 사양에 따르면, JavaScript의 숫자 타입은 실수(부동 소수점) 형식을 통해 값을 저장하기 때문에 별도의 숫자 타입이 존재하지 않는다. 단지 숫자와 숫자가 아닌 문자열, 두 가지 타입만이 명시적으로 규정되어 있다. <br>
다만 명시적으로 규정되어 있지 않음에도 JavaScript에는 아래의 여러 가지 데이터 타입이 존재한다.
<br><br>
숫자 타입은 양의 무한대인 Infinity와 음의 무한대인 -Infinity로 나눌 수 있으며, 이 밖에도 산술 연산이 불가능한 NaN(Not-a-Number)로도 분류할 수 있다. <br><br>
또한 참조하는 값이 존재하지 않는다는 의미의 null 타입, 해당 값이 참이라는 의미의 true와 거짓이라는 의미의 false를 나타낼 수 있는 boolean 타입, 값이 할당되지 않았거나 사용되지 않은 변수의 타입을 나타내는 undefined 타입 등 숫자와 문자가 아닌 이외의 것으로 판단할 있는 다양한 데이터 타입이 존재한다.

<br>

- boolean : true와 false로 참과 거짓을 나타낸다.
- undefined : 값이 할당되지 않은, 사용되지 않은 변수의 타입을 나타낸다.
- null : 어떠한 값도 참조하지 않는다는 의미의 데이터 타입이다.
- symbol : 어떠한 값과도 중복되지 않는 유니크한 값으로, 프로퍼티 키를 만들기 위해 사용된다.
- object : 여러 속성과 메소드를 포함하는 객체를 의미한다.
- function : 함수를 의미한다.