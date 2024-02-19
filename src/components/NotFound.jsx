import React, { useState } from 'react';
import eventList from "../data/events.json";
import Event from './Event';
import { Row } from 'react-bootstrap';
function NotFound () {
    
    return (<> 
       <img src="images/notfound.jfif" alt="404" />
     
    </>);
}

export default NotFound ;