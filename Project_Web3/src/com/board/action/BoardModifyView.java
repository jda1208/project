package com.board.action;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.BoardDAO;
import com.board.db.BoardBean;

public class BoardModifyView implements Action {
	 public ActionForward execute(HttpServletRequest request,HttpServletResponse response) 
	 throws Exception{
		 	ActionForward forward = new ActionForward();
		 	request.setCharacterEncoding("utf-8");
	   		
			BoardDAO boarddao=new BoardDAO();
		   	BoardBean boarddata=new BoardBean();
		   	
			int num=Integer.parseInt(request.getParameter("num"));
			String id = request.getParameter("id");
			String sessionid = request.getParameter("sessionid");
			
			if(id.equals(sessionid)) {
				boarddata=boarddao.getDetail(num);
			   	
			   	if(boarddata==null){
			   		System.out.println("(수정)상세보기 실패");
			   		return null;
			   	}
			   	System.out.println("(수정)상세보기 성공");
			   	
			   	request.setAttribute("boarddata", boarddata);
			   	forward.setRedirect(false);
		   		forward.setPath("./BoardModifyView.bo");
		   		return forward;
			}
			
			else {
				PrintWriter out=response.getWriter();
		   		out.println("<script>");
		   		out.println("alert('no permission');");
		   		out.println("location.href='./BoardList.bo';");
		   		out.println("</script>");
		   		out.close();
				System.out.println("수정권한없음");
				forward.setRedirect(false);
				forward.setPath("./BoardDetailAction.bo?num="+num);
				return forward;
			}
	 }
}