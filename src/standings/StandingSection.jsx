/** @jsxImportSource @emotion/react */

import React, { useEffect,useState } from 'react';
import StandingsCard from './StandingsCard';
import { breakpointUp } from '../mediaQueries'
import { css } from '@emotion/react'
import Modal from 'react-modal';

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
    [breakpointUp('mediumLarge')]: {
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

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
};

const StandingSection = ({standingsData}) => {

    const [combined, setCombined] = useState(false);

    const combineStats = () => {
        setCombined(!combined);
    };
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    
    useEffect(() => {
        Modal.setAppElement('#root');        
    }, [])

    return <section css={styles}>
        <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
            <h1>Hello World!!!</h1>
            <button onClick={closeModal}>close</button>
        </Modal>
        <div className="actions">
            <div className="combineSwitch">
                <p>Combined</p>
                <input onClick={combineStats} type="checkbox" id="switch" className="checkbox"/>
                <label htmlFor="switch" className="toggle" />
            </div>

            <button onClick={openModal} id="showHideStats">Show/Hide Stats</button>
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