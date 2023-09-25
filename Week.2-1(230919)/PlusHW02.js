
// O 혹은 X를 입력하고, 그 결과에 따라 정답 여부 출력해주기

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userAnswer, realAnswer;

rl.question('크시에게 "선빈"에 대해 질문하면 마빡이가 넓다고 한다. (O/X) : ', (ans) => {
    userAnswer = ans;
    realAnswer = (userAnswer === 'O' && '정답!') || '오답!';
    console.log(realAnswer);
    rl.close();
}); 