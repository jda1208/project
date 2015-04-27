package com.restaurant.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

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
	
	
	
}
