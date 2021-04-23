import axios from "axios";

const getStandings = () =>
    axios({
        method: "GET",
        url: "http://localhost:9080/nhl/standings",
        headers: {
            Accept: "application/json",
        },
    });

export { getStandings };
