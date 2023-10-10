
// 지금까지 했던 코드를 기반으로 let, const 키워드를 적절히 사용하여 var 키워드 대신 써보기
// 369 함수의 var 키워드를 let 키워드로 수정하였음

function samyukgu(number) {

    if ((number === 0) || isNaN(number)) {
        console.log("잘못된 입력");
    }

    for (let i = 1; i <= number; i++) {

        if (i >= 10) {

            let temp1 = i % 10;
            let temp2 = Math.floor(i / 10);

            if (((temp1 % 3 === 0) && (temp1 !== 0)) || (temp2 % 3 === 0))
                console.log("짝");
            else
                console.log(i);

        } else {
            if (i % 3 === 0) {
                console.log("짝");
            } else {
                console.log(i);
            }
        }
    }
}

samyukgu(67);