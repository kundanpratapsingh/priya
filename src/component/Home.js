import React, { Component } from 'react';
import LoginPage from '../container/LoginPage';
import {connect} from 'react-redux';
const Home=({data,pass,message})=>{
    return(
        <div>{data}{pass} 
        <br/> {message}</div>
  
    )
}
function mapStateToProps(state) {
  return{
      message:state.loginReducer.test
  }  
}
export default connect(mapStateToProps) (Home);  