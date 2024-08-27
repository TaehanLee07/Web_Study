# localStorage란?
***
localStorage를 사용하면, 브라우저에 key-value 값을 Storage에 저장이 가능해진다.
즉, 세션이 바뀌어도(페이지가 다시 로드되어도) 저장한 데이터가 유지된다.


# localStorage란?
***
localStorage를 사용하면, 브라우저에 key-value 값을 Storage에 저장이 가능해진다.
즉, 세션이 바뀌어도(페이지가 다시 로드되어도) 저장한 데이터가 유지된다.

## localStorage의 주요 기능
***
- **setItem()** - key, value 추가
- **getItem()** - value 읽어 오기
- **removeItem()** - item 삭제
- **clear()** - 도메인 내의 localStorage 값 삭제
- **length** - 전체 item 갯수
- **key()** - index로 key값 찾기


## **localStorage에 아이템 추가, 읽기**
***
**setItem()**

localStorage에 아이템을 추가하기 위해서는 setItem() 함수를 사용해야한다.

> window.localStorage.setItem(key, value)

**getItem()**

localStorage의 아이템을 받기 위해서는 getItem() 함수를 사용해야한다.

> window.localStorage.getItem(key)

```javascript
// setItem
window.localStorage.setItem('name', 'anna');window.localStorage.setItem('age', '20'); 
// getItem
const name = window.localStorage.getItem('name');
const age = window.localStorage.getItem('age');
// 결과 출력
document.write(name); // anna
document.write('<br/>');
document.write(age);  // 20
```

> [!NOTE]
> _**window.localStorage.setItem('name', 'anna');**_
> 
> _**window.localStorage.setItem('age', '20');**_

setItem() 함수를 사용하여 localStorage에 key-value 를 저장한다.

localStorage에는 문자열만을 저장할 수 있다.

따라서, 20을 숫자로 저장하더라도, 문자열로 저장된다.

> [!NOTE]
> _**window.localStorage.getItem('name');**_
> 
> _**window.localStorage.getItem('age');**_

getItem() 함수에 key를 전달하여

localStorage에 저장된 값을 읽을 수 있다.
