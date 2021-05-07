import { useState, useEffect } from "react";
import { getStandings } from "../api";
import StandingsCard from "./StandingsCard";
import { Switch, Row } from "antd";
import { Division, Team } from "./Models";

const combineTeams = (divisions: Division[]): Team[] => {
    return divisions
        .flatMap((d) => d.teams)
        .sort((a, b) => b.points - a.points);
};

const StandingSection = () => {
    const [combined, setCombined] = useState(false);
    const [standings, setStandings] = useState<Division[]>([]);

    useEffect(() => {
        getStandings()
            .then((d) => {
                setStandings(d.data.standings);
            })
            .catch((e) => {
                console.error(e);
            });
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

export default StandingSection;
