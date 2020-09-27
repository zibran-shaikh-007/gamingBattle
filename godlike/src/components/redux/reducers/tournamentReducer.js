const initialState={
    tournament:[]
}

const TournamentReducer = (state=initialState, actions)=>{
    
    switch(actions.type){
        case "FETCH_TOUR":
       return{...state, tournament:actions.payload};
    
        default:
           return state;
    };
}

export default TournamentReducer