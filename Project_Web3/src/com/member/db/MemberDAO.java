package com.member.db;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class MemberDAO {
	Connection con;
	PreparedStatement pstmt;
	java.sql.Statement stmt;
	ResultSet rs;
	ResultSet resultset;
	DataSource ds;
	
	public MemberDAO() {
		try{
			Context init = new InitialContext();
	  		ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		}catch(Exception ex){
			System.out.println("DB 연결 실패 : " + ex);
			return;
		}
		
	}
	
	public boolean joinMember(MemberBean member){
		String sql="insert into userlist(user_id, user_email, user_name, user_password, user_phonenum, user_menu) values(?, ?, ?, ?, ?, ?)";
		int result=0;
		
		try{
			con = ds.getConnection();
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, member.getUser_id());
			pstmt.setString(2, member.getUser_email());
			pstmt.setString(3, member.getUser_name());
			pstmt.setString(4, member.getUser_password());
			pstmt.setString(5, member.getUser_phonenum());
			pstmt.setString(6, member.getUser_menu());
			result=pstmt.executeUpdate();
			
			if(result!=0){
				return true;
			}
		}catch(Exception ex){
			System.out.println("joinMember 에러: " + ex);			
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		
		return false;
	}
	
	
	public int chkMember(String user_id){
		String sql="select user_id from userlist where user_id='"+user_id+"'";
		int result = 0;
		
		try{
			con = ds.getConnection();
			stmt=con.createStatement();
			rs=stmt.executeQuery(sql);
	
			if(rs.next())
			{
				if(rs.getString("user_id").equals(user_id)){
					result = 1;	// 중복
				}
				else{
					result = 0;	//중복x
				}
			}
		}catch(Exception ex){
			System.out.println("chkMember 에러: " + ex);			
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		
		return result;
	}
	
}
