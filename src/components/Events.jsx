import React, { useState } from 'react';
import eventList from "../data/events.json";
import Event from './Event';
import { Row } from 'react-bootstrap';
function Events () {
    
    return (<> 
     <h2>Event</h2>
     <Row>
     {eventList.map((e, i) => {
          return (
            <Event class="d-flex"
              img={e.img}
              name={e.name}
              description={e.description}
              key={i}
              price={e.price}
              nbTickets={e.nbTickets}
              nbParticipants={e.nbParticipants}
              like={e.like}
            />
          );
        })}
        </Row>
     
    </>);
}

export default Events ;