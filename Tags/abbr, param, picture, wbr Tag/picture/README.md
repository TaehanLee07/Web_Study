# picture 태그란?
***
<picture> 태그는 <img> 요소의 다중 이미지 리소스(multiple image resources)를 위한 컨테이너를 정의할 때 사용합니다.
<picture> 요소는 뷰포트의 너비에 따라 커지거나 작아지는 하나의 이미지를 사용하는 대신 서로 다른 디스플레이나
기기에서 해당 뷰포트에 알맞게 채워질 수 있도록 여러 개의 이미지 중에서 적절한 이미지를 사용할 수 있도록 해줍니다.

```html
<picture>
    <source srcset="large.jpeg" media="(min-width:960px)"">
    <source srcset="medium.jpeg" media="(min-width:620px)">
    <img src="small.jpeg" alt="이런 식으로 각각 다른 이미지를 뷰포트 너비에 따라서 출력합니다.">
</picture>
```
