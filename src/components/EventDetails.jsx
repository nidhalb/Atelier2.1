import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import eventList from "../data/events.json";



function EventDetails () {
  const {id} = useParams();
  const event = eventList.find((e)=> e.name === id)
  
  console.log(event);
  console.log(id);
    const [ticket, setTicket] = useState(event.nbTickets);
    const [participant, setParticipant] = useState(event.nbParticipants);
    const [showAlert, setShowAlert] = useState(false);
    const [like, setLike] = useState(event.like);

    const book = () => {
        setTicket(ticket - 1);
        setParticipant(participant + 1);
        setShowAlert(true);
    };
    const likeEvent = () => {

        setLike(like === false ? true : false);
    }

    useEffect(() => {

        const timeout = setTimeout(() => setShowAlert(false), 2000);
        return () => clearTimeout(timeout);
    }, [showAlert]);
    const availableImage = `../images/${event.img}`;
  const soldOutImage = `../images/sold_out.png`;


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ticket === 0 ? soldOutImage : availableImage} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                    {event.price} €
                </Card.Text>
                <Card.Text>
                    {ticket} tickets
                </Card.Text>
                <Card.Text>
                    {participant} participants
                </Card.Text>
                <Button  onClick={likeEvent} variant="primary">{like === true?"dislike":"like"}</Button>


                <Button disabled={ticket === 0} onClick={book} variant="primary">Book an Evenet</Button>
                

                <div>
                    {showAlert && (
                        <Alert variant="primary">
                            Ce message disparaîtra après 2 secondes.
                        </Alert>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default EventDetails;