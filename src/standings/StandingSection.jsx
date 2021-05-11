import { useEffect, useState } from "react";
import StandingsCard from "./StandingsCard";
import { Switch, Row } from "antd";
import { connect } from "react-redux";
import { getStandings } from "../actions/standingsActions";

const combineTeams = (divisions) => {
    return divisions
        .flatMap((d) => d.teams)
        .sort((a, b) => b.points - a.points);
};

const StandingSection = (props) => {
    const [combined, setCombined] = useState(false);

    const { getStandings, standings } = props;
    useEffect(() => {
        getStandings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const combineStats = () => {
        setCombined(!combined);
    };

    return (
        <section>
            <div className="actions">
                <p>Combined:&nbsp;</p>
                <Switch onChange={combineStats} />
            </div>
            <br />
            <Row gutter={[16, 24]}>
                {!combined &&
                    standings.map((standing) => (
                        <StandingsCard
                            key={standing.divisionName}
                            divisionName={standing.divisionName}
                            teams={standing.teams}
                            isCombined={combined}
                        />
                    ))}
                {combined && (
                    <StandingsCard
                        key="all"
                        divisionName="All"
                        teams={combineTeams(standings)}
                        isCombined={combined}
                    />
                )}
            </Row>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        standings: state.standings.standings,
    };
};

export default connect(mapStateToProps, { getStandings })(StandingSection);