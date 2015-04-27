package com.board.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.board.db.BoardDAO;
import com.board.db.BoardBean;

public class BoardAddAction implements Action {
	 public ActionForward execute(HttpServletRequest request,HttpServletResponse response) 
	 throws Exception{
		 
	   	ActionForward forward=new ActionForward();
	   	
	   	BoardDAO boarddao=new BoardDAO();
	   	BoardBean boarddata=new BoardBean();
	   	
		/*String realFolder="";
   		String saveFolder="boardupload";*/
   		
   		/*int fileSize=5*1024*1024;
   		
   		realFolder=request.getRealPath(saveFolder);*/
   		
   		boolean result=false;
   		
   		try{
   			/*MultipartRequest multi=null;
   			
   			multi=new MultipartRequest(request,
   					realFolder,
   					fileSize,
   					"utf-8",
   					new DefaultFileRenamePolicy());*/
   			boarddata.setTextNum(boarddao.getListCount()+1);
   			boarddata.setUser_Id(request.getParameter("BOARD_WRITER"));
	   		boarddata.setText_Name(request.getParameter("BOARD_SUBJECT"));
	   		boarddata.setText_Content(request.getParameter("BOARD_CONTENT"));
	   		
	   		result=boarddao.boardInsert(boarddata);
	   		
	   		if(result==false){
	   			System.out.println("게시판 등록 실패");
	   			return null;
	   		}
	   		System.out.println("게시판 등록 완료");
	   		
	   		forward.setRedirect(true);
	   		System.out.println("성공");
	   		forward.setPath("./FreeBoard.bo");
	   		return forward;
	   		
  		}catch(Exception ex){
   			ex.printStackTrace();
   		}
  		return null;
	}  	
}