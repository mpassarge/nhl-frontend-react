import { useState, useEffect } from "react";
import { getStandings } from "../api";
import StandingsCard from "./StandingsCard";
import { Switch, Row } from "antd";
import { Division, Team } from "./Models";

const combineTeams = (divisions: Division[]): Team[] => {
    console.log(divisions);

    let combinedTeams: Team[] = [];
    divisions.map(division =>
        combinedTeams.push(...division.teams)
    );
    combinedTeams.sort((a, b) => {
        return b.points - a.points;
    });
    return combinedTeams;
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
                    standings.map((s) => (
                        <StandingsCard
                            key={s.divisionName}
                            divisionName={s.divisionName}
                            teams={s.teams}
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
