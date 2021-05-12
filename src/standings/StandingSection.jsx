import { useEffect, useState } from "react";
import StandingsCard from "./StandingsCard";
import { Row } from "antd";
import { connect } from "react-redux";
import { getStandings } from "../actions/standingsActions";

const StandingSection = (props) => {
    const { getStandings, standings } = props;

    useEffect(() => {
        getStandings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <div className="actions">
                {/* <p>Combined:&nbsp;</p>
                <Switch onChange={combineStats} /> */}
            </div>
            <br />
            <Row gutter={[16, 24]}>
                {standings.map((standing) => (
                    <StandingsCard
                        key={standing.divisionName}
                        divisionName={standing.divisionName}
                        teams={standing.teams}
                    />
                ))}
            </Row>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        standings: state.standings.divisions,
    };
};

export default connect(mapStateToProps, { getStandings })(StandingSection);
