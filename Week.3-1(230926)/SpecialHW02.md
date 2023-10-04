***
## **[Callback 지옥]**
### **Callback 지옥을 해결하기 위한 예방법 및 대처법 알아보기**
<br>

**ES6 - Promise** <br><br>
: ES6의 Promise를 사용하여 탈출하는 방법. <br>
Promise는 호출될 때 바로 실행되지만, 그 안의 콜백은 resolve, reject 둘 중 하나가 호출되기 전에는 then 또는 catch로 넘어가지 않는다. 따라서 resolve 혹은 reject로 성공과 실패로 결과 값을 나타내어 다음 작업을 제어할 수 있다. <br><br>
=> then으로 작업을 이어나가기 위해서는 `resolve()` 함수를 호출한다. <br>
=> 작업 중단 혹은 err 처리를 위해서는 `reject()` 함수를 호출한다.