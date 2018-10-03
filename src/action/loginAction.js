export default function login(userName,password) {
    let logedInData={};
    logedInData.userName=userName;
    logedInData.password=password;
    return function(dispatch) {
        
        dispatch({
type:'SIMPLE_ACTION',payload:logedInData})
    }
}