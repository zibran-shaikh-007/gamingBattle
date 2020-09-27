const initialState ={
    items:[]
}


const GamesReducer = (state=initialState, actions)=>{
   
    switch (actions.type) {
        case "FETCH_GAMES":
            /* console.log('reducer', actions.payload) */
            return{...state, items:actions.payload} ;
           
            
        
    default:
     return state;
    }
    
}


export default GamesReducer;