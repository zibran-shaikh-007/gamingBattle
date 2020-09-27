import AuthReducer from './AuthReducer';
import GamesReducer from "./gamesReducer";
import TournamentReducer from "./tournamentReducer";
import RegisterReducer from "./registerReducer";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
        auth: AuthReducer,
        games: GamesReducer,
        tour: TournamentReducer,
        register: RegisterReducer

})


export {
        rootReducer
}