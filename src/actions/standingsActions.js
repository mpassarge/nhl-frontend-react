import axios from "axios";
import { SET_STANDINGS } from "../reducers/types";

const addPinnedBooleanToDivisions = (standings) => {
    return standings.map((standing) => ({...standing, pinned: false}));
}

export const getStandings = () => async (dispatch) => {    
    try {        
        const res = await axios.get(`http://localhost:9080/nhl/standings`);  
        const standings = addPinnedBooleanToDivisions(res.data.standings);
        dispatch({
            type: SET_STANDINGS,
            payload: standings,
        });
    } catch (e) {
        // TODO: dispatch error event
        console.error(`Error getting Standings: ${e}`);
    }
};
