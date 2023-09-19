
// 아래의 비교가 무엇이 다른지 알아보시오.

// ==는 동등 비교로써, 암묵적 형변환을 통하여 좌우항의 타입을 일치시킨 후 비교
// ===는 일치 비교로써, 좌우항의 타입과 값이 모두 같은 경우에만 true 반환

5 == 5;                 // 5와 5는 같음, true
5 == '5';               // 5와 5는 같음, true

5 === 5;                // 5와 5는 같음, true
5 === '5';              // 5와 '5'는 다름, false

'0' == '';              // 0과 ' '는 다름, false
0 == '';                // 0과 0(공백)은 같음, true
0 == '0';               // 0과 0은 같음, true

false == 'false';       // 'false'는 문자열이 비어있지 않으므로 true가 됨, false와 true는 다름, false
false == '0';           // false와 false는 같음, true
false == null;          // null은  형변환을 하더라도 false와 동일하지 않음, false
false == undefined;     // undefined는 형변환을 하더라도 false와 동일하지 않음, false

NaN === NaN             // NaN은 산술 연산이 불가능하단 의미, 자신과도 일치하지 않음, false
0 == -0                 // JS에서는 부동 소수점 형식을 사용하므로 둘을 같은 값으로 인식, true
0 === -0                // JS에서는 부동 소수점 형식을 사용하므로 둘을 같은 값으로 인식, true 