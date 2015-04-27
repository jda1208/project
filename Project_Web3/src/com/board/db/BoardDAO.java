package com.board.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class BoardDAO {
	
	Connection con;
	PreparedStatement pstmt;
	ResultSet rs;
	DataSource ds;
	
	public BoardDAO() {
		try{
			Context init = new InitialContext();
	  	ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
	  	
		}catch(Exception ex){
			System.out.println("DB 연결 실패 : " + ex);
			return;
		}
	}
	
	//글의 개수 구하기.
	public int getListCount() {
		int x= 0;
		
		try{
			con=ds.getConnection();
			pstmt=con.prepareStatement("select count(*) from freeboard");
			rs = pstmt.executeQuery();
			
			if(rs.next()){
				x=rs.getInt(1);
			}
		}catch(Exception ex){
			System.out.println("getListCount 에러: " + ex);			
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		return x;
	}
	
	//글 목록 보기.	
	/*public List getBoardList(int page,int limit){*/
	public List getBoardList(){
		/*String board_list_sql="select * from "+
		"(select rownum rnum,BOARD_NUM,BOARD_ID,BOARD_SUBJECT,"+
		"BOARD_CONTENT,BOARD_FILE,BOARD_RE_REF,BOARD_RE_LEV,"+
		"BOARD_RE_SEQ,BOARD_READCOUNT,BOARD_DATE from "+
		"(select * from memberboard order by "+
		"BOARD_RE_REF desc,BOARD_RE_SEQ asc)) "+
		"where rnum>=? and rnum<=?";*/
		
		String board_list_sql="select textnum, text_name, user_id from freeboard";
		List list = new ArrayList();
		
		/*int startrow=(page-1)*10+1; //읽기 시작할 row 번호.
		int endrow=startrow+limit-1; //읽을 마지막 row 번호.	*/		
	try{
			con=ds.getConnection();
			pstmt = con.prepareStatement(board_list_sql);
			/*pstmt.setInt(1, startrow);
			pstmt.setInt(2, endrow);*/
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				BoardBean board = new BoardBean();
				/*board.setTextNum(rs.getInt("TextNum"));
				board.setUser_Id(rs.getString("User_Id"));
				board.setUser_Email(rs.getString("User_Email"));
				board.setText_Name(rs.getString("Text_Name"));
				board.setText_WriteDay(rs.getDate("Text_WriteDay"));
				board.setText_Hit(rs.getInt("Text_Hit"));
				board.setText_Content(rs.getString("Text_Content"));
				board.setText_Data(rs.getString("Text_Data"));
				board.setText_Password(rs.getString("Text_Password"));
				board.setRefer(rs.getInt("refer"));
				board.setDepth(rs.getInt("depth"));
				board.setStep(rs.getInt("step"));*/
				board.setTextNum(rs.getInt("textnum"));
				board.setUser_Id(rs.getString("user_id"));
				board.setText_Name(rs.getString("text_name"));
				list.add(board);
			}
			
			return list;
		}catch(Exception ex){
			System.out.println("getBoardList 에러 : " + ex);
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		return null;
	}
	
	//글 내용 보기.
	public BoardBean getDetail(int num) throws Exception{
		BoardBean board = null;
		try{
			con = ds.getConnection();
			pstmt = con.prepareStatement(
					"select * from freeboard where TEXTNUM = ?");
			pstmt.setInt(1, num);
			
			rs= pstmt.executeQuery();
			
			if(rs.next()){
				board = new BoardBean();
				board.setTextNum(rs.getInt("TEXTNUM"));
				board.setUser_Id(rs.getString("USER_ID"));
				board.setText_Name(rs.getString("TEXT_NAME"));
				board.setText_WriteDay(rs.getDate("Text_WriteDay"));
				board.setText_Content(rs.getString("Text_Content"));
				board.setText_Hit(rs.getInt("Text_Hit"));
			}
			return board;
		}catch(Exception ex){
			System.out.println("getDetail 에러 : " + ex);
		}finally{
			if(rs!=null)try{rs.close();}catch(SQLException ex){}
			if(pstmt !=null)try{pstmt.close();}catch(SQLException ex){}
			if(con !=null)try{con.close();}catch(SQLException ex){}
		}
		return null;
	}
	
	//글 등록.
	public boolean boardInsert(BoardBean board){
		/*int num =0;*/
		String sql="";
		int result=0;
		
		try{
			con = ds.getConnection();
			/*pstmt=con.prepareStatement(
					"select max(board_num) from memberboard");
			rs = pstmt.executeQuery();*/
			
			/*if(rs.next())
				num =rs.getInt(1)+1;
			else
				num=1;*/
			
			/*sql="insert into memberboard (BOARD_NUM,BOARD_ID,BOARD_SUBJECT,";
			sql+="BOARD_CONTENT, BOARD_FILE,BOARD_RE_REF,"+
				"BOARD_RE_LEV,BOARD_RE_SEQ,BOARD_READCOUNT,"+
				"BOARD_DATE) values(?,?,?,?,?,?,?,?,?,sysdate)";*/
			sql = "insert into freeboard(textnum, User_Id, Text_Name, Text_Content) values(?,?,?,?)";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, board.getTextNum());
			pstmt.setString(2, board.getUser_Id());
			pstmt.setString(3, board.getText_Name());
			pstmt.setString(4, board.getText_Content());
			
			result=pstmt.executeUpdate();
			if(result==0)return false;
			
			return true;
		}catch(Exception ex){
			System.out.println("boardInsert 에러 : "+ex);
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		return false;
	}
	
	/*//글 답변.
	public int boardReply(BoardBean board){
		String board_max_sql="select max(board_num) from memberboard";
		String sql="";
		int num=0;
		int result=0;
		
		int re_ref=board.getBOARD_RE_REF();
		int re_lev=board.getBOARD_RE_LEV();
		int re_seq=board.getBOARD_RE_SEQ();
		
		try{
			con = ds.getConnection();
			pstmt=con.prepareStatement(board_max_sql);
			rs = pstmt.executeQuery();
			if(rs.next())num =rs.getInt(1)+1;
			else num=1;
			
			sql="update memberboard set BOARD_RE_SEQ=BOARD_RE_SEQ+1 ";
			sql+="where BOARD_RE_REF=? and BOARD_RE_SEQ>?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1,re_ref);
			pstmt.setInt(2,re_seq);
			result=pstmt.executeUpdate();
			
			re_seq = re_seq + 1;
			re_lev = re_lev+1;
			
			sql="insert into memberboard (BOARD_NUM,BOARD_ID,BOARD_SUBJECT,";
			sql+="BOARD_CONTENT,BOARD_FILE,BOARD_RE_REF,BOARD_RE_LEV,";
			sql+="BOARD_RE_SEQ,BOARD_READCOUNT,BOARD_DATE) ";
			sql+="values(?,?,?,?,?,?,?,?,?,sysdate)";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			pstmt.setString(2, board.getBOARD_ID());
			pstmt.setString(3, board.getBOARD_SUBJECT());
			pstmt.setString(4, board.getBOARD_CONTENT());
			pstmt.setString(5, ""); //답장에는 파일을 업로드하지 않음.
			pstmt.setInt(6, re_ref);
			pstmt.setInt(7, re_lev);
			pstmt.setInt(8, re_seq);
			pstmt.setInt(9, 0);
			pstmt.executeUpdate();
			return num;
		}catch(SQLException ex){
			System.out.println("boardReply 에러 : "+ex);
		}finally{
			if(rs!=null)try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null)try{pstmt.close();}catch(SQLException ex){}
			if(con!=null)try{con.close();}catch(SQLException ex){}
		}
		return 0;
	}*/
	
	//글 수정.
	public boolean boardModify(BoardBean modifyboard) throws Exception{
		String sql="update freeboard set TEXT_NAME=?,TEXT_CONTENT=? where TEXTNUM=?";
		
		try{
			con = ds.getConnection();
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, modifyboard.getText_Name());
			pstmt.setString(2, modifyboard.getText_Content());
			pstmt.setInt(3, modifyboard.getTextNum());
			pstmt.executeUpdate();
			return true;
		}catch(Exception ex){
			System.out.println("boardModify 에러 : " + ex);
		}finally{
			if(rs!=null)try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null)try{pstmt.close();}catch(SQLException ex){}
			if(con!=null)try{con.close();}catch(SQLException ex){}
			}
		return false;
	}
	
	/*//글 삭제.
	public boolean boardDelete(int num){
		String board_delete_sql=
			"delete from memberboard where BOARD_num=?";
		
		int result=0;
		
		try{
			con = ds.getConnection();
			pstmt=con.prepareStatement(board_delete_sql);
			pstmt.setInt(1, num);
			result=pstmt.executeUpdate();
			if(result==0)return false;
			
			return true;
		}catch(Exception ex){
			System.out.println("boardDelete 에러 : "+ex);
		}finally{
			try{
				if(pstmt!=null)pstmt.close();
				if(con!=null)con.close();
			}catch(Exception ex) {}
		}
		
		return false;
	}*/
	
	//조회수 업데이트.
	/*public void setReadCountUpdate(int num) throws Exception{
		String sql="update memberboard set BOARD_READCOUNT = "+
			"BOARD_READCOUNT+1 where BOARD_NUM = "+num;
		
		try{
			con=ds.getConnection();
			pstmt=con.prepareStatement(sql);
			pstmt.executeUpdate();
		}catch(SQLException ex){
			System.out.println("setReadCountUpdate 에러 : "+ex);
		}
		finally{
			try{
				if(pstmt!=null)pstmt.close();
				if(con!=null)con.close();
			}catch(Exception ex) {}
		}
	}
	
	//글쓴이인지 확인.
	public boolean isBoardWriter(int num,String id){
		System.out.println("id="+id);
		String board_sql=
			"select * from memberboard where BOARD_NUM=?";
		
		try{
			con=ds.getConnection();
			pstmt=con.prepareStatement(board_sql);
			pstmt.setInt(1, num);
			rs=pstmt.executeQuery();
			rs.next();
			
			if(id.equals(rs.getString("BOARD_ID"))){
				return true;
			}
		}catch(SQLException ex){
			System.out.println("isBoardWriter 에러 : "+ex);
		}
		finally{
			try{
				if(pstmt!=null)pstmt.close();
				if(con!=null)con.close();
			}catch(Exception ex) {}
		}
		return false;
	}*/
}
	