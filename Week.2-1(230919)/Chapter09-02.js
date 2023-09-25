
// if문처럼 작동하는 true 값 여부를 판별하는 코드를 빈칸에 알맞게 작성하기

var isThereMessage = true;
var message = '';

if (isThereMessage) message = '멘토는 죽어있다.';

message = isThereMessage && '멘토는 죽어있다.';
console.log(message);

// 출력 : 멘토는 죽어있다.