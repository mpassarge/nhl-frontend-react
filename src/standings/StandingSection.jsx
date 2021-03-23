/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import StandingsCard from './StandingsCard';
import { breakpointUp } from '../mediaQueries'
import { css } from '@emotion/react'

// Figure out 
const styles = css({
    '.actions': {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50px',
        marginBottom: '1rem',
        '.combineSwitch': {
            textAlign: 'center',
            '.toggle': { 
                position : 'relative',
                display : 'inline-block',
                width : '50px',
                height : '26px',
                backgroundColor: 'red',
                borderRadius: '30px',
                border: '2px solid gray',
            },
            '.toggle:after': { 
                content: "''", 
                position: 'absolute',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'gray', 
                top: '1px', 
                left: '1px',
                transition:  'all 0.5s',
            },
            '.checkbox:checked + .toggle::after': { 
                left : '25px',
            },
            '.checkbox:checked + .toggle': { 
                backgroundColor: 'green',
            },
            '.checkbox': {  
                display : 'none',
            },
        },
        '#showHideStats': {
            height: '65%',
        },
    },
    [breakpointUp('large')]: {
        '.standingsCard': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: '2rem'
        }
    },
});

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

    return <section css={styles}>
        <div className="actions">
            <div className="combineSwitch">
                <p>Combined</p>
                <input onClick={combineStats} type="checkbox" id="switch" className="checkbox"/>
                <label htmlFor="switch" className="toggle" />
            </div>
        </div>
        <div className="standingsCard">
            { !combined && Object.keys(standingsData).map(division => {
                return <StandingsCard key={division} divisionName={division} teams={standingsData[division]} isCombined={combined} />
            })}
            {combined && <StandingsCard key="all" divisionName="All" teams={combineTeams(standingsData)} isCombined={combined}/>}
        </div>
    </section>;
}

export default StandingSection;