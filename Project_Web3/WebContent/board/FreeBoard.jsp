<%@page import="com.board.db.BoardBean"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
   List boardList=(List)request.getAttribute("boardlist");
%>
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
   
<!--    $.ajax(
            {                  //method -> get(), post()
               dataType : "json", //xml, json->getJSON, script->getScript, html(txt)->load
               url : "Ex08_jsonboard.json",
               //data : data(보내는 데이터) {"name":$('#name').val()}
               success : function(data){
                  //서버에서 응답이 오고 상태정보 OK, 200~299
                  //가공작업
                  //$.each(data,function(index,obj){});
                  var board = "<table>";
                  board += "<tr><td>id</td><td>name</td><td>title</td><td>content</td></tr>";
                  $.each(data,function(){
                     //this가 객체를 받음
                     //console.log(this);
                     board += "<tr><td>"+this.id+"</td><td>"+this.name+"</td><td>"+this.title+"</td><td>"+this.content+"</td><tr>";   
                  });
                  board += "</table>";
                  $('#treeData').append(board);
                  
               },
               error : function(xhr) {
                  alert(xhr.status);
               }
            }      
         ); -->
         
   <script>      
            $(window).load(function() {   
             $('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});
             
             $('#write').click(function(){
                $.ajax(
                   {
                      url: './board/write.jsp',
                      /* dataType: 'jsp', */
                      success: function(data){
                         $('#freeboard').load('./board/write.jsp #writeform');
                      }
                   }      
                );
             });
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
               <table class="board-table">
                  <tr>
                     <td colspan="4">자유 게시판</td>
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
                  <%
                      int detailnum;
                     for (int i = 0; i < boardList.size(); i++) {
                        BoardBean bl = (BoardBean) boardList.get(i);
                        detailnum = bl.getTextNum();
                  %> 
                  <tr align="center" valign="middle" bordercolor="#333333">
                    <!--  onmouseover="this.style.backgroundColor='#CEFBC9'"
                     onmouseout="this.style.backgroundColor='#FFD8D8'"> -->
                     <td><%=bl.getTextNum()%></td>
                     <td>
                        <a href="./BoardDetailAction.bo?num=<%=bl.getTextNum()%>">
                            <%= bl.getText_Name() %>
                        </a>
                     </td>
                     <td><%= bl.getUser_Id() %></td>
                     <td></td>
                     <td></td>
   <%--                   <td height="23" style="font-family: Tahoma; font-size: 10pt;">
                        <%=bl.getBOARD_NUM()%>
                     </td>

                     <td style="font-family: Tahoma; font-size: 10pt;">
                        <div align="left">
                           <%
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
                              <%=bl.getText_Name()%>
                           </a>
                        </div>
                     </td>

                     <td style="font-family: Tahoma; font-size: 10pt;">
                        <div align="center">
                           <%=bl.getBOARD_ID()%>
                        </div>
                     </td>
                     <td style="font-family: Tahoma; font-size: 10pt;">
                        <div align="center">
                           <%=bl.getBOARD_DATE()%>
                        </div>
                     </td>
                     <td style="font-family: Tahoma; font-size: 10pt;">
                        <div align="center">
                           <%=bl.getBOARD_READCOUNT() %>
                        </div>
                     </td> --%>
                  </tr>
                  <%} %>
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
                           <input type="button" id="write" value="글쓰기">
                     </td>
                  </tr>
               </table>
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