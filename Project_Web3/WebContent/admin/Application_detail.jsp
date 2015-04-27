<%@page import="com.restaurant.db.RestaurantBean"%>
<%@ page import="com.board.db.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	RestaurantBean res = (RestaurantBean) request.getAttribute("resdetail");
	String sessionid = (String)session.getAttribute("id");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Application Detail</title>
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
<meta name="description" content="Your description">
<meta name="keywords" content="Your keywords">
<meta name="author" content="Your name">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css"
	media="screen">
<link rel="stylesheet" href="css/responsive.css" type="text/css"
	media="screen">
<link rel="stylesheet" href="css/style.css" type="text/css"
	media="screen">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300'
	rel='stylesheet' type='text/css'>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/superfish.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script src="js/forms.js"></script>
<script>		
		   	$(window).load(function() {	
		    	$('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});
		   	});
	</script>
</head>

<body>
	<div class="spinner"></div>
	<!--============================== header =================================-->
	<header> <jsp:include page="../header.jsp"></jsp:include> </header>
	<div class="bg-content">
		<!--============================== content =================================-->
		<div id="content">
			<div class="container">
				<h3>Application Detail</h3>
				<div class="row" id="freeboard">
					<form id="detailform">
						<table width="80%" border="1" class="board-table">
							<tr>
								<td width="20%" align="center"><b> 글번호 </b></td>
								<td width="30%"><%=res.getTextnum()%></td>
							</tr>
							<tr>
								<td width="20%" align="center"><b>글쓴이</b></td>
								<td width="30%"><%=res.getUser_id()%></td>
								<td width="20%" align="center"><b>이메일</b></td>
								<td><%=res.getUser_email()%></td>
							</tr>
							<tr>
								<td width="20%" align="center"><b>맛집이름</b></td>
								<td><%= res.getRestaurant_name()%></td>
								<td width="20%" align="center"><b>맛집전화번호</b></td>
								<td><%=res.getRestaurant_phonenum()%>
								</td>
							</tr>
							<tr>
								<td width="20%" align="center"><b>맛집주소</b></td>
								<td colspan="3"><%=res.getRestaurant_address()%></td>
							</tr>
							
							<tr>
								<td colspan="4" align="center">
										<a href="#">[승인]</a>&nbsp;&nbsp;
										<a href="./RestaurantListAction.res">[목록]</a>&nbsp;&nbsp;
								</td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--============================== footer =================================-->
	<footer> <jsp:include page="../footer.jsp"></jsp:include> </footer>
	<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>