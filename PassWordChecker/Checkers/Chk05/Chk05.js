function chkPW(){

	var pw = $("#password").val();
	var id = $("#id").val();
		
	var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	var hangulcheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
	 
	if(false === reg.test(pw)) {
	alert('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.');
	}else if(/(\w)\1\1\1/.test(pw)){
	 alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
	 return false;
	 }else if(pw.search(id) > -1){
	 alert("비밀번호에 아이디가 포함되었습니다.");
	  return false;
	 }else if(pw.search(/\s/) != -1){
	 alert("비밀번호는 공백 없이 입력해주세요.");
	 return false;
	 }else if(hangulcheck.test(pw)){
	 alert("비밀번호에 한글을 사용 할 수 없습니다."); 
	 }else {
	 console.log("통과");
	 }

}
