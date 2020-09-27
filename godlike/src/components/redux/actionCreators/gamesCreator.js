import axios from "axios";

export const fetchGames = () =>async dispatch=>{
   
        await axios.get(`https://api.thegamingbattle.com/createGame`)
            .then(res => {
                dispatch({
                    type: "FETCH_GAMES",
                    payload: res.data.createGame
                })
            })

            .catch(err => {
                console.log(`err ${err}`)
            })
    
}