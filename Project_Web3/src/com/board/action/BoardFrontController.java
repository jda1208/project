package com.board.action;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.action.ActionForward;
import com.board.action.BoardAddAction;
/*import com.board.action.BoardDeleteAction;
import com.board.action.BoardDetailAction;*/
import com.board.action.BoardListAction;
/*import com.board.action.BoardModifyAction;
import com.board.action.BoardModifyView;
import com.board.action.BoardReplyAction;
import com.board.action.BoardReplyView;*/

 public class BoardFrontController 
 	extends javax.servlet.http.HttpServlet 
 	implements javax.servlet.Servlet {
	 protected void doProcess(HttpServletRequest request, HttpServletResponse response) 
	 	throws ServletException, IOException {
		 String RequestURI=request.getRequestURI();
		 String contextPath=request.getContextPath();
		 String command=RequestURI.substring(contextPath.length());
		 ActionForward forward=null;
		 Action action=null;
		 
		 System.out.println("controller command" + command);
		 System.out.println("controller contextpath" + contextPath);
		 
		 
		   if(command.equals("/FreeBoard.bo")){
			   action = new BoardListAction();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
			   
		   }else if(command.equals("/FreeBoardView.bo")){
			   forward=new ActionForward();
			   forward.setRedirect(false);
			   forward.setPath("./board/FreeBoard.jsp");
			   
		   }else if(command.equals("/Notice.bo")){
			   forward=new ActionForward();
			   forward.setRedirect(false);
			   forward.setPath("./board/Notice.jsp");
			   
		   }/*else if(command.equals("/BoardWrite.bo")){
			   forward=new ActionForward();
			   forward.setRedirect(false);
			   forward.setPath("./board/qna_board_write.jsp");
		   }*//*else if(command.equals("/BoardReplyAction.bo")){
			   action = new BoardReplyView();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
		   }*/else if(command.equals("/BoardModify.bo")){
			   action = new BoardModifyView();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
	 	   }else if(command.equals("/BoardAddAction.bo")){
			   action  = new BoardAddAction();
			   try {
				   forward=action.execute(request, response );
			   } catch (Exception e) {
				   e.printStackTrace();
			   }
		   }/*else if(command.equals("/BoardReplyView.bo")){
			   action = new BoardReplyAction();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
		   }*/else if(command.equals("/BoardModifyAction.bo")){
			   action = new BoardModifyAction();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
		   }/*else if(command.equals("/BoardDeleteAction.bo")){
			   action = new BoardDeleteAction();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
		   }*//*else if(command.equals("/BoardList.bo")){
			   action = new BoardListAction();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
		   }*/else if(command.equals("/BoardDetailAction.bo")){
			   action = new BoardDetailAction();
			   try{
				   forward=action.execute(request, response);
			   }catch(Exception e){
				   e.printStackTrace();
			   }
		   }else if(command.equals("/BoardDetailView.bo")){
			   forward=new ActionForward();
			   forward.setRedirect(false);
			   forward.setPath("./board/board_detail.jsp");
			   
		   }else if(command.equals("/BoardModifyView.bo")){
			   forward=new ActionForward();
			   forward.setRedirect(false);
			   forward.setPath("./board/board_modify.jsp");
		   }
		   
		if (forward != null) {
			if (forward.isRedirect()) {
				response.sendRedirect(forward.getPath());
			} else {
				RequestDispatcher dispatcher = request.getRequestDispatcher(forward.getPath());
				dispatcher.forward(request, response);
			}
		}
	 }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
		throws ServletException, IOException {
		System.out.println("board");
		doProcess(request,response);
	}  	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
		throws ServletException, IOException {
		doProcess(request,response);
	}   	  	    
}