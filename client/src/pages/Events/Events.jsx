import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import EventListing from "../../components/EventListing/EventListing";
import Accordion from "react-bootstrap/Accordion";
import Container from "../../components/Container/Container";
import AlertContext from "../../context/AlertContext";
import Alert from "../../components/Alert/Alert";

function Events() {
  const [events, setEvents] = useState([]);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    loadEvents();
  }, []);

  const getEvents = function () {
    return axios.get("/api/events");
  };

  function loadEvents() {
    getEvents()
      .then((res) => setEvents(res.data))
      .catch((err) => {
        setAlert({
          message: "Could not load events.",
          type: "danger",
        });
      });
  }

  return (
    <>
      <Container>
        <Alert />
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
              city={eventaroo.city}
              state={eventaroo.state}
              description={eventaroo.description}
              maxAttendees={eventaroo.maxAttendees}
              eventLink={eventaroo.eventLink}
            />
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default Events;
