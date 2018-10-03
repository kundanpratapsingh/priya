import React, { Component } from 'react';
import {connect} from 'react-redux';
import Home from'../component/Home';
class HomePage extends Component{
    constructor(){
        super();
        this.state={
         value:'Hi'
        }
    }
    render(){
    return(
            <div>
           <Home data={this.props.userName} pass={this.props.password} push={this.props.history.push}/>
            </div>
            )
    }
} 
function mapStateToProps(state) {
  return{
      userName:state.loginReducer.userName,
      password:state.loginReducer.password
  }  
}
function mapDispatchToProps(dispatch) {
    return{
        dispatch:dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);