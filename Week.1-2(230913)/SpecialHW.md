
<br>

## **[프로그래머스 : 나머지가 1이 되는 수 찾기]**

<br>문제 : 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.<br><br>
제한 사항 : 3 ≤ n ≤ 1,000,000<br><br>

```JS
function solution(n) {
    var answer = n;
    
    for (let x = n; x >= 1; x--) {
        if (n % x === 1 && x < answer) {
            answer = x;
        }
    }
    
    return answer;
}
```
