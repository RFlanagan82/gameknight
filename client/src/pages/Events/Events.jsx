import React, { useState, useEffect } from "react";
import axios from "axios";
import EventListing from "../../components/EventListing/EventListing";
import Accordion from 'react-bootstrap/Accordion';
import Container from "../../components/Container/Container"

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const getEvents = function () {
    return axios.get("/api/events");
  };

  function loadEvents() {
    getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container>
        <Accordion>
          {events.map((eventaroo, index) => (
          <EventListing 
          key={index}
          eventkey={eventaroo._id}
          eventName={eventaroo.eventName}
          date={eventaroo.date}
          gameTime={eventaroo.gameTime}
          gameName={eventaroo.gameName}
          category={eventaroo.gameCategory}
          description={eventaroo.description}
          maxAttendees={eventaroo.maxAttendees}
          eventLink={eventaroo.eventLink}/>
          ))}
          </Accordion>
      </Container>

    </>
  );
}

export default Events;