$(function(){
			 $.ajax({
		                type: "POST",
		                url: "Chkid.jsp", 
			 			success: function(response) { 
		                			var result = response;
		                			if(result == 1) {	
			                                $("#chkdiv").html("<p>사용가능한 ID입니다.</p>");
			                        }
			                        else {
			                                $("#chkdiv").html("<p>ID가 이미 존재합니다.</p>"); 
			                       }
		                },
		                error :function(data){alert("error발생");}
	       			 });
	       	return false;
		
	});