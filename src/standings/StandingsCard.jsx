/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react'
import { breakpointUp } from '../mediaQueries';

const containerStyles = (isCombined) => css({
    border: "1px solid black",
    ':not(:last-child)': {
        marginBottom: '2rem',
    },
    'WebkitBoxShadow': '3px 2px 3px 1px rgba(0,0,0,0.56)',
    'boxShadow': '3px 2px 3px 1px rgba(0,0,0,0.56)',
    borderRadius: '5px',
    'h2': {
        textAlign: 'center',
        textTransform: 'capitalize',
        margin: '0.875rem',
        textDecoration: 'underline',
        textUnderlineOffset: '2px'
    },
    'table': {
        border: '1px solid black',
        width: '100%',
    },
    'th,td': {
        padding: '0.1875rem 0rem 0.1875rem 0rem',
        textAlign: 'left',
        borderTop: '1px solid black',
    },
    'tbody tr:nth-of-type(even)': {
        backgroundColor: 'red',
    },
    [`thead tr th:nth-of-type(1), 
    tbody tr td:nth-of-type(1)`]: {
        width: '40%',
    },
    [breakpointUp('mediumLarge')]: {
        [`thead tr th:nth-of-type(1), 
        tbody tr td:nth-of-type(1)`]: {
            width: '45%',
        },
        ':not(:last-child)': {
            marginBottom: '0rem',
        },
        flex: '1 0 40%',
    },
    [isCombined && breakpointUp('medium')]: {
        [`thead tr th:nth-of-type(1), 
        tbody tr td:nth-of-type(1)`]: {
            width: '30%',
        },
    },
});

const StandingsCard = ({ divisionName, teams, isCombined }) => {
    return <div css={containerStyles(isCombined)}>
        <h2>{divisionName.replace('-', ' ')}</h2>
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                { teams.map(team => 
                    <tr key={team.name}>
                        <td>{team.name}</td>
                        <td>{team.points}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
}

export default StandingsCard;