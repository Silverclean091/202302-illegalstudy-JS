
// 전역변수 + 지역변수 관련 해석 코드 30줄 이상 직접 작성 후, 코드 리뷰

// 사용자 정보를 담을 빈 배열 생성하기 (전역)
var userDatabase = [];

// 사용자의 이름과 나이를 입력받아 사용자를 추가하는 함수
function addUser(name, age) {
    const user = {      // 사용자 이름과 나이가 들어간 객체 생성 (지역)
        name: 'hamsik',
        age: 5,
    };
    userDatabase.push(user);    // 배열에 입력받은 사용자 정보 추가하기
}

// 사용자의 이름을 입력받아 해당 사용자가 존재하는지 찾아보는 함수
function findUser(name) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].name === name) {
            return userDatabase[i];     // 해당 이름의 사용자가 존재할 경우, 해당 배열 반환
        }
    }
    return null;    // 해당 이름의 사용자가 존재하지 않을 경우, null 반환
}

// 유저 추가하기
addUser('chunsik', 3);
addUser('semi', 21);
addUser('nenethin', 18);

// 유저를 검색한 결과를 isThereUser 이라는 변수에 저장
var isThereUser = findUser('hamsik');

if (isThereUser) {
    console.log(isThereUser.age, "살짜리 ", isThereUser.name, "찾았당!");
} else {
    console.log("걔 가출한듯...");
}

// 실행 결과 : 5 살짜리  hamsik 찾았당!