
<br>

***
## **[의도적 부재]**
### **null을 의도적 부재로 사용한다고 하였는데, 의도적 부재는 왜 사용하는 걸까?**

<br>
: null은 변수에 값이 없다는 것을 의도적으로 명시하기 위해, 즉 의도적 부재로 사용한다. <br>
JavaScript 엔진의 GC의 경우 어떤 것도 참조하지 않는 메모리 공간에 대해서 작업을 수행하는 경향이 있다. <br><br>
변수에 null이 선언되어 있을 경우, 이는 이전에 있던 참조값을 더 이상 참조하지 않겠다는 뜻으로 받아들이며 이에 따라 GC가 작업을 수행하게 된다. 이는 GC가 효과적으로 작동하여 메모리 효율을 높이는 데 도움을 준다.