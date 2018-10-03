import React, { Component } from 'react';
import Login from '../component/Login';
import {connect} from 'react-redux';
import login from '../action/loginAction';
class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:''
        }
    }
     handleUser=(e)=>{
     this.setState({userName:e.target.value});
}
 handlePass=(e)=>{
  this.setState({password:e.target.value});
}

    handleOnLogin=(e)=>{
          
     this.props.dispatch(login("Hello " +this.state.userName," Your Password is " +this.state.password));
        this.props.history.push('/dashboard');
       
    } 
    render(){
       console.log(this.state.userName);
        console.log(this.state.password);

    return(
             <div>
             <Login message={this.props.message} userName={this.state.userName}  password={this.state.password} handlePass={(e)=>this.handlePass(e)} handleUser={(e)=>this.handleUser(e)} handleLogin={(e)=>this.handleOnLogin(e)} />
             </div>
         )
     }

}
function mapStateToProps(state) {
  return{
      message:state.loginReducer.test
     }  
}


export default connect(mapStateToProps) (LoginPage);