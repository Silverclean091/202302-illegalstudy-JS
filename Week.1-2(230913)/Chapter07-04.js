
// 아래의 결과는 왜 다를까?
// Object.is()는 두 값을 엄격하게 비교한 후, 동일할 경우에만 true를 출력함

-0 === 0;               // true : 값과 타입이 같음
Object.is(-0, 0);       // false : 부동 소수점 숫자를 세부적으로 따져보았을 때, 둘의 값은 다름

NaN === NaN;            // false : 값과 타입을 따져보았을 때는 같다고 할 수 없음
Object.is(NaN, NaN);    // true : NaN이라는 것 자체를 따져보았을 때는 NaN과 NaN이 같다고 할 수 있음

 