import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import AttendingEventCard from "../../components/AttendingEventCard/AttendingEventCard";
import HostingEventCard from "../../components/HostingEventCard/HostingEventCard";
import Container from "../../components/Container/Container";

const MyEvents = () => {
  return (
    <>
      <Jumbotron />
      <Container>
      <h1 className="py-2 text-center">Hosted Events</h1>
      <CardDeck>
        <HostingEventCard />
        <HostingEventCard />
        <HostingEventCard />
      </CardDeck>
      <h1 className="py-2 mt-4 text-center">Upcoming Events</h1>
      <CardDeck>
      <AttendingEventCard />
      <AttendingEventCard />
      <AttendingEventCard />
      </CardDeck>
      </Container>
    </>
    
  );
};
export default MyEvents;
