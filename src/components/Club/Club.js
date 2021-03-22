import React from 'react';
import './Club.css';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Club = (props) => {
    const leagues = props.leagues;
    const newLeagues = leagues.slice(172, 187)

    const history = useHistory()
    const handleClub = (id) => {
        const url = `/clubDetail/${id}`
        history.push(url)
    }
    
    // use font awesome icon for explore button 
    const arrowRight = <FontAwesomeIcon icon={faArrowRight} />

    const cardStyle = {
        backgroundColor: '#15031d',
        margin: '1rem',
        color: 'white'
    }

    return (
        <div>
            <div >

            </div>
            <div className="league-container">
                {
                    newLeagues.map(league => {
                        const { idLeague, strLeague, strLeagueAlternate } = league
                        return (
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src="" alt="I am don't Getting Image from API" />
                                <Card.Body>
                                    <Card.Title>
                                        {strLeague}
                                    </Card.Title>
                                    <Card.Text>
                                        {strLeagueAlternate}
                                    </Card.Text>
                                    <Button
                                        variant="outline-info"
                                        onClick={() => handleClub(idLeague)}>
                                        Explore {arrowRight}
                                    </Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Club;