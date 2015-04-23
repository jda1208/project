<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Community</title>
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
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
		    	jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});	
		   	});			
	</script>
	
	<!--[if lt IE 8]>
	  		<div style='text-align:center'><a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.com/img/upgrade.jpg"border="0"alt=""/></a></div>  
	 	<![endif]-->
	<!--[if (gt IE 9)|!(IE)]><!-->
	<!--<![endif]-->
	<!--[if lt IE 9]>
	    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script> 
	    <link rel="stylesheet" href="css/ie.css" type="text/css" media="screen">
	    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
	    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400' rel='stylesheet' type='text/css'>
	  <![endif]-->
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
								<li class="active"><a href="FreeBoard.jsp">Community</a>
									<ul>
										<li><a href="Notice.jsp">공지사항</a></li>
										<li><a href="FreeBoard.jsp">자유게시판</a></li>
									</ul></li>
								<li><a href="JoinUs.jsp">Join Us</a></li>
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
		<div id="content">
			<div class="ic">More Website Templates @ TemplateMonster.com.
				November19, 2012!</div>
			<div class="container">
				<div class="row">
					<h3>Community</h3>
					<table class="board-table">
						<tr>
							<td colspan="4">공지사항</td>
							<td>글 개수 :</td>
						</tr>
						<tr>
							<td>
								<div>글번호</div>
							</td>
							<td>
								<div>제목</div>
							</td>
							<td>
								<div>글쓴이</div>
							</td>
							<td>
								<div>작성일</div>
							</td>
							<td>
								<div>조회수</div>
							</td>
						</tr>
						<%-- 						<%
							for (int i = 0; i < boardList.size(); i++) {
								BoardBean bl = (BoardBean) boardList.get(i);
						%> --%>
						<tr align="center" valign="middle" bordercolor="#333333"
							onmouseover="this.style.backgroundColor='F8F8F8'"
							onmouseout="this.style.backgroundColor=''">
							<td height="23" style="font-family: Tahoma; font-size: 10pt;">
							<%-- 	<%=bl.getBOARD_NUM()%> --%>
							</td>

							<td style="font-family: Tahoma; font-size: 10pt;">
								<div align="left">
								<%-- 	<%
										if (bl.getBOARD_RE_LEV() != 0) {
									%>
									<%
										for (int a = 0; a <= bl.getBOARD_RE_LEV() * 2; a++) {
									%>
									&nbsp;
									<%
										}
									%>
									▶
									<%
										} else {
									%>
									▶
									<%
										}
									%> 
 									<a href="./BoardDetailAction.bo?num=<%=bl.getBOARD_NUM()%>">
										<%=bl.getBOARD_SUBJECT()%>
									</a> --%>
								</div>
							</td>

							<td style="font-family: Tahoma; font-size: 10pt;">
								<div align="center">
									<%-- <%=bl.getBOARD_ID()%> --%>
								</div>
							</td>
							<td style="font-family: Tahoma; font-size: 10pt;">
								<div align="center">
								<%-- 	<%=bl.getBOARD_DATE()%> --%>
								</div>
							</td>
							<td style="font-family: Tahoma; font-size: 10pt;">
								<div align="center">
									<%-- <%=bl.getBOARD_READCOUNT() %> --%>
								</div>
							</td>
						</tr>
						<%-- <%} %> --%>
						<tr align=center height=20>
							<td colspan=5 style=font-family:Tahoma;font-size:10pt;>
								<%-- <%if(nowpage<=1){ %> --%>
								<!-- [이전]&nbsp; -->
								<%-- <%}else{ %> --%>
								<a href="#">[이전]</a>
								<%-- <%} %> --%>
								
								<%-- <%for(int a=startpage;a<=endpage;a++){
									if(a==nowpage){%>
									[<%=a %>]
									<%}else{ %> --%>
									<%-- <a href="./BoardList.bo?page=<%=a %>">[<%=a %>]</a> --%>
									<%-- &nbsp;
									<%} %>
								<%} %>
								
								<%if(nowpage>=maxpage){ %> --%>
								<!-- [다음] -->
								<%-- <%}else{ %> --%>
								<a href="#">[다음]</a>
								<%-- <%} %> --%>
							</td>
						</tr>
						<tr style="text-align: right">
							<td colspan="5">
						   		<a href="#">[글쓰기]</a>
							</td>
						</tr>
					</table>
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
		<div class="privacy pull-left">
			Website Template designed by <a
				href="http://www.templatemonster.com/" target="_blank"
				rel="nofollow">TemplateMonster.com</a>
		</div>
	</div>
	</footer>
	<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>