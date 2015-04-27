<%@ page import="com.board.db.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	BoardBean board = (BoardBean) request.getAttribute("boarddata");
	String sessionid = (String)session.getAttribute("id");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>FreeBoardDetail</title>
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
	<header>
		<jsp:include page="../header.jsp"></jsp:include>
	</header>
	<div class="bg-content">
		<!--============================== content =================================-->
		<div id="content">
			<div class="ic">More Website Templates @ TemplateMonster.com.
				November19, 2012!</div>
			<div class="container">
				<h3>Community</h3>
				<div class="row" id="freeboard">
					<form id="detailform">
						<table cellpadding="0" cellspacing="0">
							<tr align="center" valign="middle">
								<td colspan="5">MVC 게시판</td>
							</tr>
							<tr>
								<td>글번호</td>
								<td><%=board.getTextNum()%>
								<td style="font-family: 돋음; font-size: 12" height="16">
									<div align="center">제 목&nbsp;&nbsp;</div>
								</td>

								<td style="font-family: 돋음; font-size: 12"><%=board.getText_Name()%>
								</td>
							</tr>
							<tr>
								<td>작성자</td>
								<td><%=board.getUser_Id()%>
								<td>조회수</td>
								<td><%=board.getText_Hit()%>
								<td>작성일자</td>
								<td><%=board.getText_WriteDay()%>
							</tr>

							<tr>
								<td style="font-family: 돋음; font-size: 12">
									<div align="center">내 용</div>
								</td>
								<td style="font-family: 돋음; font-size: 12">
									<table border=0 width=490 height=250
										style="table-layout: fixed">
										<tr>
											<td valign=top style="font-family: 돋음; font-size: 12"><%=board.getText_Content()%>
											</td>
										</tr>
									</table>
								</td>

							</tr>
							<tr bgcolor="cccccc">
								<td colspan="2" style="height: 1px;"></td>
							</tr>
							<tr>
								<td colspan="2">&nbsp;</td>
							</tr>
							<tr align="center" valign="middle">
								<td colspan="5"><font size=2> 
									<%-- <a href="./BoardReplyAction.bo?num=<%=board.getBOARD_NUM() %>"> --%>
										[답변] <!-- </a>&nbsp;&nbsp; --> 
										
										<a href="./BoardModify.bo?num=<%=board.getTextNum()%>&id=<%=board.getUser_Id()%>&sessionid=<%=sessionid%>">[수정]</a>&nbsp;&nbsp;
										
										<%-- <a href="./BoardDeleteAction.bo?num=<%=board.getBOARD_NUM() %>"> --%>
										[삭제] <!-- </a>&nbsp;&nbsp; --> 
										
										<a href="./FreeBoard.bo">[목록]</a>&nbsp;&nbsp;
								</font></td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
	</div>
	<!--============================== footer =================================-->
	<footer>
		<jsp:include page="../footer.jsp"></jsp:include>
	</footer>
	<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>