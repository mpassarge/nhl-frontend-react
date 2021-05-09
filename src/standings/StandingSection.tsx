import { useState } from "react";
import StandingsCard from "./StandingsCard";
import { Switch, Row } from "antd";
import { Division, Team } from "./Models";
import { useSelector } from "react-redux";

const combineTeams = (divisions: Division[]): Team[] => {
    return divisions
        .flatMap((d) => d.teams)
        .sort((a, b) => b.points - a.points);
};

const StandingSection = () => {
    const [combined, setCombined] = useState(false);

    const standings = useSelector<any>(state => state.standings) as any[];

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

export default StandingSection;
