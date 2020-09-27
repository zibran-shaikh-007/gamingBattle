import axios from "axios";

export const fetchTournaments = () => async dispatch => {
    await axios.get(`https://api.thegamingbattle.com/tournament`)
        .then(res => {
            dispatch({
                type: "FETCH_TOUR",
                payload: res.data.tournaments
            })

        })

        .catch(err => {
            console.log(`err in geeting tournemants ${err}`)
        })
}