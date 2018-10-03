import React, { Component } from 'react';
import { TextField } from 'react-md';
import { Card, CardTitle, CardText } from 'react-md';
import { Button } from 'react-md';
const style = { maxWidth: 320 ,marginTop:50};

const Login=({userName,password,handleLogin,message,handleUser,handlePass})=>{
    return(
    <Card style={style} className="md-block-centered">
       {message} 
       
    <CardTitle title="Login Page"/>
    <CardText>
     <div className="md-cell-10">
    <TextField
      id="floating-center-title"
      label="Title"
      lineDirection="center"
      placeholder="userName" 
      onBlur={(e) =>handleUser(e)}
      className="md-cell md-cell--bottom"/>
      </div>
      <div className="md-cell-10">
      <TextField
      id="floating-password"
      label="Enter your password"
      onBlur={(e) =>handlePass(e)}
      type="password"
      className="md-cell md-cell--bottom"/> 
      <Button onClick={(e)=>handleLogin(e)}flat primary swapTheming>Login</Button>
      </div>
      </CardText>
     </Card>
    )
}
export default Login;

