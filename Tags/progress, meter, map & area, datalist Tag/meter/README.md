# 표시화면
![image](https://github.com/TaehanLee07/HTML_STUDY/assets/121335699/21db548e-7287-4896-9f23-5d5d4ba1fb47)

# meter 태그는 어디서 이용할까??
디스크 용량
배터리 충전 량
과 같은곳에 사용할 수 있다.

# 사용법
<p>디스크 사용량 : <meter min="0" max="100" value="34">34GB 사용중!</meter></p> 과 같이 사용할수 있다 하나씩 meter태그의 속성들에 대해 알려주겠다 ㅋ

value="n" : 현재 값
지정하지 않거나 잘못되면 0으로 간주. 범위에서 벗어나는 경우, 범위에 맞춰 나머지 값을 버린다.

min="n" : 법위의 최솟값
지정하지 않으면 0

max="n" : 범위의 최대값.
지정하지 않으면 1

low="n" : 낮은 값의 범위를 표시 

high="n" : 높은 값의 범위를 표시.

optimum="n" : 측정값의  최적값을 표시해준다 값에 따라 색이 변한다 

빨강 : optimum 값이 min보단 크거나 같고 값이 low 보다 작은 경우
노랑 : optimum 값이 min보단 크거나 같고 값이 high 보다 작거나 경우
초록 : optimum 값이 high보단 크고 값이 max보다 작거나 경우

