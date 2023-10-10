
// 아래 콘솔로그에서 무엇이 나올지 실행해보자.

var x = 'globaaaal';

function banana() {
    console.log(x);     // undefined
    var x = 'locccccccccccccccal';
}

banana();
console.log(x);         // globaaaal

// 함수 내부에서 var로 변수를 선언할 시, 이는 호이스팅에 의해 함수의 가장 위로 끌어올려진다.
// 따라서 바깥의 var x = 'globaaaal'라는 선언을 무시하게 되고,
// banana() 함수 내부에서는 console.log(x);가 실행된 시점이 변수 x의 선언 이전이므로,
// undefined 값을 출력하게 된다.

// 반면에 외부에서 실행한 console.log(x);의 경우, banana(); 내부 함수의 변수 x의 영향을 받지 않으므로
// 정상적으로 외부 변수 x의 값인 'globaaaal'을 출력한다.
