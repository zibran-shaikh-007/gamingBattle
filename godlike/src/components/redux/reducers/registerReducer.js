const initialState = {
    register:[]
}

const RegisterReducer = (state=initialState, actions)=>{
    switch (actions.type) {
        case "POST_DATA":
            console.log("actionjs", actions.payload)
            return{...state, register:actions.payload}
    
        default:
           return state;
    }
}

export default RegisterReducer;