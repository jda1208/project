<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
   String id = (String)session.getAttribute("id");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
   jQuery(window).load(function() {
      
      $('a.login-window').click(function() {
         
         // Getting the variable's value from a link 
         var loginBox = $(this).attr('href');

         //Fade in the Popup and add close button
         $(loginBox).fadeIn(300);

         //Set the center alignment padding + border
         var popMargTop = ($(loginBox).height() + 24) / 2;
         var popMargLeft = ($(loginBox).width() + 24) / 2;

         $(loginBox).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
         });

         // Add the mask to body
         $('body').append('<div id="mask"></div>');
         $('#mask').fadeIn(300);

         return false;
      });
      
      
      <%
         if( id != null ) {
         %> if( $(".logout").css("display") == "none" ) {
            
                  $('.logout').css("display", "block");
                  $('.btn-sign').css("display", "none");
            }
         <%   
         } else {
         %>
               if( $(".btn-sign").css("display") == "none" ) {
                     
                  $('.btn-sign').css("display", "block");
                   $('.logout').css("display", "none");
               }
         <%}%>
      
      $('a.close, #mask').live('click', function() {
         $('#mask , .login-popup').fadeOut(300, function() {
            $('#mask').remove();
         });
         return false;
      });
      
   });
</script>
</head>
<body>
	<div class="btn-sign">
		<a href="#login-box" class="login-window">Login</a>
	</div>
	<div id="login-box" class="login-popup">
		<a href="#" class="close"><img src="img/close_pop.png"
			class="btn_close" title="Close Window" alt="Close" /></a>
		<form method="post" class="signin" action="MemberLoginAction.do">
			<fieldset class="textbox">
				<label class="username"> <span>Username</span> <input
					id="username" name="username" value="" type="text"
					autocomplete="on" placeholder="Username">
				</label> <label class="password"> <span>Password</span> <input
					id="password" name="password" value="" type="password"
					placeholder="Password">
				</label> <input type="submit" id="signin" class="submit button"
					value="Sign in">
				<p>
					<a class="forgot" href="#">Forgot your password?</a>
				</p>

			</fieldset>
		</form>
	</div>
	<div class="logout">
		<a href="logoutok.jsp" class="logout-window">Logout</a>
	</div>

	<div class="container clearfix">
		<div class="row">
			<div class="span12">
				<div class="navbar navbar_">
					<div class="container">
						<h1 class="brand brand_">
							<a href="Main.jsp"><img alt="" src="img/logo.png"> </a>
						</h1>
						<a class="btn btn-navbar" data-toggle="collapse"
							data-target=".nav-collapse_">Menu <span class="icon-bar"></span>
						</a>
						<div class="nav-collapse nav-collapse_  collapse">
							<ul class="nav sf-menu">
								<li class="active"><a href="Main.jsp">About</a></li>
								<li><a href="Company.jsp">Company</a></li>
								<li><a href="MenuSearch.jsp">Menu Search</a></li>
								<li><a href="AreaSearch.jsp">Area Search</a></li>
								<li><a href="FreeBoard.bo">Community</a>
									<ul>
										<li><a href="Notice.bo">공지사항</a></li>
										<li><a href="FreeBoard.bo">자유게시판</a></li>
									</ul></li>
								<li><a href="Join.do">Join Us</a></li>
								<li><a href="Admin.jsp">Admin</a>
									<ul>
										<li><a href="#">맛집관리 </a></li>
										<li><a href="RestaurantListAction.res">맛집신청</a></li>
										<li><a href="MemberListAction.do">회원관리</a></li>
									</ul></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>