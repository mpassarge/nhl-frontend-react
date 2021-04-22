/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import StandingsCard from './StandingsCard';
import { Switch, Row } from 'antd';


const combineTeams = (standingsData) => {
    let combinedTeams = [];
    Object.keys(standingsData).forEach(division => {
        combinedTeams.push(...standingsData[division]);
    });
    combinedTeams.sort((a, b) => {return b.points - a.points});
    return combinedTeams;
}

const StandingSection = ({standingsData}) => {

    const [combined, setCombined] = useState(false);

    const combineStats = () => {
        setCombined(!combined);
    };

    return <section>
        <div className="actions">
            <p>Combined:&nbsp;</p>
            <Switch onChange={combineStats} />
        </div>
        <br/>
        <Row gutter={[16, 24]}>
            { !combined && Object.keys(standingsData).map(division => {
                return <StandingsCard key={division} divisionName={division} teams={standingsData[division]} isCombined={combined} />
            })}
            {combined && <StandingsCard key="all" divisionName="All" teams={combineTeams(standingsData)} isCombined={combined}/>}
        </Row>
    </section>;
}

export default StandingSection;