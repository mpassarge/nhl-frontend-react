import { useState, useEffect } from "react";
import { getStandings } from "../api";
import StandingsCard from "./StandingsCard";
import { Switch, Row } from "antd";

const combineTeams = (standingsData) => {
    let combinedTeams = [];
    Object.keys(standingsData).forEach((division) => {
        combinedTeams.push(...standingsData[division]);
    });
    combinedTeams.sort((a, b) => {
        return b.points - a.points;
    });
    return combinedTeams;
};

const StandingSection = () => {
    const [combined, setCombined] = useState(false);
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        getStandings()
            .then((d) => {
                setStandings(d.data);
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
                    Object.keys(standings).map((division) => {
                        return (
                            <StandingsCard
                                key={division}
                                divisionName={division}
                                teams={standings[division]}
                                isCombined={combined}
                            />
                        );
                    })}
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
