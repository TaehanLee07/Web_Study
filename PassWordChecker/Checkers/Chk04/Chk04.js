function chkPW(){

		var pw = $("#password").val();
		var id = $("#id").val();
	    var checkNumber = pw.search(/[0-9]/g);
	    var checkEnglish = pw.search(/[a-z]/ig);
	 
	    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)){            
	        alert('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
	        return false;
	    }else if(checkNumber <0 || checkEnglish <0){
	        alert("숫자와 영문자를 혼용하여야 합니다.");
	        return false;
	    }else if(/(\w)\1\1\1/.test(pw)){
	        alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
	        return false;
	    }else if(pw.search(id) > -1){
	        alert("비밀번호에 아이디가 포함되었습니다.");
	        return false;
	    }else {

		console.log("통과");
		
		}

}
