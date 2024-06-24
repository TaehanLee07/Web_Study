## 코드 완성하기 / 코드를 보고 이미지대로 완성하기

---

![image](https://github.com/TaehanLee07/HTML_STUDY/assets/121335699/999d5cd2-7ba1-4042-8030-0cef17647fec)

### 전체 코드

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>움직이는 글자</title>
    <link rel="stylesheet" href="style.css">
	  <style>
			html,
			body {
			    width: 100%;
			    /* 코드 입력 */
			    
			    background: #FF7777;
			    -webkit-font-smoothing: antialiased;
			    /* 코드 입력 */
			    
			    justify-content: center;
			    /* 코드 입력 */
			    
			}
			
			h1 {
			    height: 100px;
			}
			
			h1 span {
			    position: relative;
			    top: 20px;
			    display: inline-block;
			    animation: bounce .3s ease infinite alternate;
			    font-family: 'Titan One', cursive;
			    font-size: 80px;
			    color: #FFF;
			    text-shadow: 0 1px 0 #CCC,
			        0 2px 0 #CCC,
			        0 3px 0 #CCC,
			        0 4px 0 #CCC,
			        0 5px 0 #CCC,
			        0 6px 0 transparent,
			        0 7px 0 transparent,
			        0 8px 0 transparent,
			        0 9px 0 transparent,
			        0 10px 10px rgba(0, 0, 0, .4);
			}
			
			h1 span:nth-child(2) {
			    animation-delay: .1s;
			}
			
			h1 span:nth-child(3) {
			    animation-delay: .2s;
			}
			
			h1 span:nth-child(4) {
			    animation-delay: .3s;
			}
			
			h1 span:nth-child(5) {
			    animation-delay: .4s;
			}
			
			h1 span:nth-child(6) {
			    animation-delay: .5s;
			}
			
			h1 span:nth-child(7) {
			    animation-delay: .6s;
			}
			
			h1 span:nth-child(8) {
			    animation-delay: .7s;
			}
			
			@keyframes bounce {
			    100% {
			        top: -20px;
			        text-shadow: 0 1px 0 #CCC,
			            0 2px 0 #CCC,
			            0 3px 0 #CCC,
			            0 4px 0 #CCC,
			            0 5px 0 #CCC,
			            0 6px 0 #CCC,
			            0 7px 0 #CCC,
			            0 8px 0 #CCC,
			            0 9px 0 #CCC,
			            0 50px 25px rgba(0, 0, 0, .2);
			    }
			}
	  </style>
</head>

<body>
    <h1>
        <span>F</span>
        <span>r</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>-</span>
        <span>E</span>
        <span>n</span>
        <span>d</span>
        <span>!</span>
    </h1>
</body>

</html>
```

**height는 100%로 하기**

**flex요소에 있는 align-items로 Front-End! 글자를 가운데로 옮기기**
