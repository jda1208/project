package com.restaurant.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import com.board.db.BoardBean;

public class RestaurantDAO {
	Connection con;
	PreparedStatement pstmt;
	java.sql.Statement stmt;
	ResultSet rs;
	ResultSet resultset;
	DataSource ds;
	
	public RestaurantDAO() {
		try{
			Context init = new InitialContext();
	  		ds = (DataSource) init.lookup("java:comp/env/jdbc/OracleDB");
		}catch(Exception ex){
			System.out.println("DB 연결 실패 : " + ex);
			return;
		}
		
	}
	
	public boolean RestaurantApply(RestaurantBean res){
		String sql="insert into Application(textnum, user_id, user_email, Restaurant_Name, Restaruant_Adress, Restaurant_PhoneNum)"
					+"values(application_idx.nextval, ?, ?, ?, ?, ?)";
		int result=0;
		
		try{
			con = ds.getConnection();
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, res.getUser_id());
			pstmt.setString(2, res.getUser_email());
			pstmt.setString(3, res.getRestaurant_name());
			pstmt.setString(4, res.getRestaurant_address());
			pstmt.setString(5, res.getRestaurant_phonenum());
			
			result=pstmt.executeUpdate();
			
			if(result!=0){
				return true;
			}
		}catch(Exception ex){
			System.out.println("RestaurantApply 에러: " + ex);			
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		
		return false;
	}
	
	public List getApplicationList(){
		
		String sql="select textnum, user_id, user_email, Restaurant_Name, Restaruant_Adress, Restaurant_PhoneNum from application";
		List list = new ArrayList();
		
		
	try{
			con=ds.getConnection();
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				RestaurantBean res = new RestaurantBean();
				res.setTextnum(rs.getInt(1));
				res.setUser_id(rs.getString(2));
				res.setUser_email(rs.getString(3));
				res.setRestaurant_name(rs.getString(4));
				res.setRestaurant_address(rs.getString(5));
				res.setRestaurant_phonenum(rs.getString(6));
				list.add(res);
			}
			
		
			return list;
		}catch(Exception e){
			System.out.println("getApplicationList 에러 : " + e);
		}finally{
			if(rs!=null) try{rs.close();}catch(SQLException ex){}
			if(pstmt!=null) try{pstmt.close();}catch(SQLException ex){}
			if(con!=null) try{con.close();}catch(SQLException ex){}
		}
		return null;
	}
	
	public RestaurantBean ApplicationDetail(int num) throws Exception{
		RestaurantBean res = null;
		try{
			con = ds.getConnection();
			pstmt = con.prepareStatement(
					"select textnum, user_id, user_email, Restaurant_Name, Restaruant_Adress, Restaurant_PhoneNum from application where TEXTNUM = ?");
			pstmt.setInt(1, num);
			
			rs= pstmt.executeQuery();
			
			if(rs.next()){
				res = new RestaurantBean();
				res.setTextnum(rs.getInt(1));
				res.setUser_id(rs.getString(2));
				res.setUser_email(rs.getString(3));
				res.setRestaurant_name(rs.getString(4));
				res.setRestaurant_address(rs.getString(5));
				res.setRestaurant_phonenum(rs.getString(6));
			}
			return res;
		}catch(Exception e){
			System.out.println("ApplicationDetail 에러 : " + e);
		}finally{
			if(rs!=null)try{rs.close();}catch(SQLException ex){}
			if(pstmt !=null)try{pstmt.close();}catch(SQLException ex){}
			if(con !=null)try{con.close();}catch(SQLException ex){}
		}
		return null;
	}
	
	
}
