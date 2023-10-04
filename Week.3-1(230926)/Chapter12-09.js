
// 콜백지옥 구현 후, 콜백 지옥의 위험성 설명하기

setTimeout(function() {
    console.log("20초 남았습니다.");
    setTimeout(function() {
        console.log("19초 남았습니다.");
        setTimeout(function() {
            console.log("18초 남았습니다.");
            setTimeout(function() {
                console.log("17초 남았습니다.");
                setTimeout(function() {
                    console.log("16초 남았습니다.");
                    setTimeout(function() {
                        console.log("15초 남았습니다.");
                        setTimeout(function() {
                            console.log("14초 남았습니다.");
                            setTimeout(function() {
                                console.log("13초 남았습니다.");
                                setTimeout(function() {
                                    console.log("12초 남았습니다.");
                                    setTimeout(function() {
                                        console.log("11초 남았습니다.");
                                        setTimeout(function() {
                                            console.log("10초 남았습니다.");
                                            setTimeout(function() {
                                                console.log("9초 남았습니다.");
                                                setTimeout(function() {
                                                    console.log("8초 남았습니다.");
                                                    setTimeout(function() {
                                                        console.log("7초 남았습니다.");
                                                        setTimeout(function() {
                                                            console.log("6초 남았습니다.");
                                                            setTimeout(function() {
                                                                console.log("5초 남았습니다.");
                                                                setTimeout(function() {
                                                                    console.log("4초 남았습니다.");
                                                                    setTimeout(function() {
                                                                        console.log("3초 남았습니다.");
                                                                        setTimeout(function() {
                                                                            console.log("2초 남았습니다.");
                                                                            setTimeout(function() {
                                                                                console.log("1초 남았습니다.");
                                                                                setTimeout(function() {
                                                                                    console.log("뿡.");
                                                                                }, 1000);
                                                                            }, 1000);
                                                                        }, 1000);
                                                                    }, 1000);
                                                                }, 1000);
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// 콜백 지옥이 발생하게 되면 코드의 가독성이 현저히 떨어질 뿐더러 코드의 유지 보수가 어려워진다.
// 또한 지나치게 많은 신호를 주게받게 되므로 오류가 발생할 가능성이 증가한다.
