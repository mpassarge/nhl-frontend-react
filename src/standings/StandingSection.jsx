import { useEffect } from "react";
import StandingsCard from "./StandingsCard";
import { Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getStandings } from "../actions/standingsActions";

const StandingSection = () => {
    const standings = useSelector(state => state.standings.divisions);
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getStandings());
    }, [dispatch]);

    return (
        <section>
            <div className="actions">
            </div>
            <br />
            <Row gutter={[16, 24]}>
                {standings.map((division) => (
                    <StandingsCard
                        key={division.divisionName}
                        division={division}
                    />
                ))}
            </Row>
        </section>
    );
};

export default StandingSection;
