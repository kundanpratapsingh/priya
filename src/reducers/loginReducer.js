const state=(state={
    test:'Simple Redux Example',userName:'',password:''}, action)=>{
        switch(action.type){
            case 'SIMPLE_ACTION':
            return{
                ...state,
                userName:action.payload.userName,
                password:action.payload.password
            }
            default:return state
        }
    }

export default state; 