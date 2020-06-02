import React, { useState, useEffect } from "react";
import axios from 'axios';
import Event from './Event';

function EventsList() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const events = await axios.get(`http://localhost:4000/api/events`).then(response => {
        return response.data;
    });
    setEvents(events);
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <h1>Triathlon Events:</h1>
        {events.map((event, index)=>{
            return (
              <div key={`event ${index}`}>
                <Event 
                  name={event.name}
                  location={event.location.name}
                  description={event.description}
                />
              </div>
            )
        })}
    </div>
  );
}

export default EventsList;
