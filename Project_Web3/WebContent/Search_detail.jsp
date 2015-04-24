<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>맛집 상세보기</title>
   <link rel="icon" href="img/icon.png" type="image/x-icon">
   <link rel="shortcut icon" href="img/icon.png" type="image/x-icon" />
   <meta name="description" content="Your description">
   <meta name="keywords" content="Your keywords">
   <meta name="author" content="Your name">
   <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen">
   <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen">
   <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
   <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery.js"></script>
   <script type="text/javascript" src="js/superfish.js"></script>
   <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>   
   <script src="js/forms.js"></script>
	<script>
		jQuery(window).load(function() {
			jQuery('.spinner').animate({
				'opacity' : 0
			}, 1000, 'easeOutCubic', function() {
				jQuery(this).css('display', 'none')
			});
		});
	</script>
</head>
<body>
<div class="spinner"></div>
<!--============================== header =================================-->
	<header>
	<div class="btn-sign">
			<a href="#login-box" class="login-window">Login</a>
        </div>
        <div id="login-box" class="login-popup">
        <a href="#" class="close"><img src="img/close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>
          <form method="post" class="signin" action="#">
                <fieldset class="textbox">
            	<label class="username">
                <span>Username</span>
                <input id="username" name="username" value="" type="text" autocomplete="on" placeholder="Username">
                </label>
                
                <label class="password">
                <span>Password</span>
                <input id="password" name="password" value="" type="password" placeholder="Password">
                </label>
                
                <button class="submit button" type="button">Sign in</button>
                
                <p>
                <a class="forgot" href="#">Forgot your password?</a>
                </p>
                
                </fieldset>
          </form>
		</div>
		<div class="logout">
			<h5><a id="logout">Logout</a></h5>
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
								<li><a href="Main.jsp">About</a></li>
								<li><a href="Company.jsp">Company</a></li>
								<li><a href="MenuSearch.jsp">Menu Search</a></li>
								<li><a href="AreaSearch.jsp">Area Search</a></li>
								<li><a href="FreeBoard.jsp">Community</a>
									<ul>
										<li><a href="Notice.jsp">공지사항</a></li>
										<li><a href="FreeBoard.jsp">자유게시판</a></li>
									</ul></li>
								<li><a href="member/JoinUs.jsp">Join Us</a></li>
								<li><a href="Admin.jsp">Admin</a>
									<ul>
										<li><a href="#">맛집관리 </a></li>
										<li><a href="#">맛집신청</a></li>
										<li><a href="#">회원관리</a></li>
									</ul></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</header>
<div class="bg-content"> 
      <!--============================== content =================================-->
      
    <div class="container">
          <div class="row" align="center">
        <article class="span12">
              <h3>맛집 이름 여기에</h3>
              
              <div class="inner-1">
    				<table class="detail">
    					<tr><td>THEME</td><td>음식테마 여기에</td></tr>
    					<tr><td>AREA</td><td>맛집 지역 여기에</td></tr>
    					<tr><td>ADDRESS</td><td>맛집 주소 여기에</td></tr>
    					<tr><td>TEL</td><td>맛집 전화번호 여기에</td></tr>
    					<tr><td>TIME</td><td>맛집 영업시간 여기에</td></tr>
    					<tr><td>SCORE</td><td>맛집 점수 여기에</td></tr>
    				</table>        
          	  </div>
        </article>
        
      </div>
        </div>
  </div>
    </div>

<!--============================== footer =================================-->
<footer>
      <div class="container clearfix">
    <ul class="list-social pull-right">
          <li><a class="icon-1" href="#"></a></li>
          <li><a class="icon-2" href="#"></a></li>
          <li><a class="icon-3" href="#"></a></li>
          <li><a class="icon-4" href="#"></a></li>
        </ul>
    <div class="privacy pull-left">Website Template designed by <a href="http://www.templatemonster.com/" target="_blank" rel="nofollow">TemplateMonster.com</a> </div>
  </div>
    </footer>
<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>