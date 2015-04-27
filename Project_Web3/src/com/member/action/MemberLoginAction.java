package com.member.action;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.member.action.ActionForward;
import com.member.db.MemberBean;
import com.member.db.MemberDAO;

public class MemberLoginAction implements Action{
	 public ActionForward execute(HttpServletRequest request,HttpServletResponse response) 
	 	throws Exception{
		 	ActionForward forward = new ActionForward();
		 	
		 	HttpSession session=request.getSession();
			MemberDAO memberdao=new MemberDAO();
	   		MemberBean member=new MemberBean();
	   		
	   		int result=-1;
	   		
	   		member.setUser_id(request.getParameter("username"));
	   		member.setUser_password(request.getParameter("password"));
	   		 
	   		result=memberdao.isMember(member);
	   		
	   		if(result==0){
	   			response.setContentType("text/html;charset=utf-8");
		   		PrintWriter out=response.getWriter();
		   		out.println("<script>");
		   		out.println("alert('비밀번호가 일치하지 않습니다.');");
		   		out.println("location.href='./MemberLogin.me';");
		   		out.println("</script>");
		   		out.close();
		   		return null;
	   		}else if(result==-1){
	   			response.setContentType("text/html;charset=utf-8");
		   		PrintWriter out=response.getWriter();
		   		out.println("<script>");
		   		out.println("alert('아이디가 존재하지 않습니다.');");
		   		out.println("location.href='./MemberLogin.me';");
		   		out.println("</script>");
		   		out.close();
		   		return null;
		   	}
	   		
	   		//로그인 성공
	   		session.setAttribute("id", member.getUser_id());
	   		
	   		/*	   		
 			System.out.println(member.getUser_id());
	   		String id=(String)session.getAttribute("id");
	   		System.out.println(id);
	   		*/
	   		
	   		forward.setRedirect(true);
	   		//forward.setPath("./BoardList.bo");
	   		forward.setPath("./Main.jsp");
	   		return forward;
	}
}