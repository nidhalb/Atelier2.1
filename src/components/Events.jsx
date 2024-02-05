import React, { useState } from 'react';
import eventList from "../data/events.json";
import Event from './Event';
function Events () {
    
    return (<> 
     <h2>Event</h2>
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
     
    </>);
}

export default Events ;