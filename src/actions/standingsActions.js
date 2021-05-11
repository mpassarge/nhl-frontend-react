import axios from "axios";
import { GET_STANDINGS } from "../reducers/types";

export const getStandings = () => async (dispatch) => {    
    try {        
        const res = await axios.get(`http://localhost:9080/nhl/standings`);        
        dispatch({
            type: GET_STANDINGS,
            payload: res.data.standings,
        });
    } catch (e) {
        // TODO: dispatch error event
        console.error(`Error getting Standings: ${e}`);
    }
};
