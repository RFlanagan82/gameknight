import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import EventListing from "../../components/EventListing/EventListing";
import Accordion from "react-bootstrap/Accordion";
import Container from "../../components/Container/Container";
import AlertContext from "../../context/AlertContext";
import Alert from "../../components/Alert/Alert";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Row from "../../components/Row/Row";
import "./Events.css"
import EventJumbo from "../../components/EventJumbo/EventJumbo";

function Events() {
  const [events, setEvents] = useState([]);
  const { setAlert } = useContext(AlertContext);
  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [sortCategory, setSortCategory] = useState("");

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

  const sortEvents = function (value) {
    if (value === "date asc") {
      setEvents(events.sort((a, b) => (a.date > b.date ? 1 : -1)));
    } else if (value === "date desc") {
      setEvents(events.sort((a, b) => (a.date < b.date ? 1 : -1)));
    } else {
      loadEvents();
    }
  };

  const searchEvents = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setEvents(events.filter((event) => event[searchCategory].includes(search)))
  };

  const resetEvents = function () {
    setSearchCategory("");
    setSearch("");
    setSortCategory("");
    loadEvents();
  };

  return (
    <>
    <EventJumbo />
      <Container>
        <Alert />
        <Row>
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <Card className="p-4 bg-dark knight-font">
              <Form onSubmit={(e) => {searchEvents(e)}}>
                <Form.Group controlId="searchCategory">
                  <Form.Label className="text-white">
                    Search Category
                  </Form.Label>
                  <Form.Control
                    required
                    as="select"
                    custom
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.currentTarget.value)}
                  >
                    <option value="" className="disabled">
                      Choose a Search Category
                    </option>
                    <option value="eventName">Event Name</option>
                    <option value="gameName">Game Name</option>
                    <option value="gameCategory">Game Category</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    You must select a category to search.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="text-white">Search Term</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Search Term"
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    You must enter a search term.
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="mr-1" type="submit" variant="warning">
                  Search
                </Button>
                <Button className="ml-1" variant="warning" onClick={resetEvents}>
                  Reset
                </Button>
              </Form>
              <Form className="mt-5">
                <Form.Label className="text-white">Sort</Form.Label>
                <Form.Control
                  required
                  as="select"
                  custom
                  value={sortCategory}
                  onChange={(e) => {
                    setSortCategory(e.currentTarget.value);
                    sortEvents(e.currentTarget.value);
                  }}
                >
                  <option value="" className="disabled">
                    Sort By
                  </option>
                  <option value="date asc">Date (earliest to latest)</option>
                  <option value="date desc">Date (latest to earliest)</option>
                </Form.Control>
              </Form>
            </Card>
          </div>
        </Row>
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
              attendees={eventaroo.attendees}
              loadEvents={loadEvents}
            />
          ))}
        </Accordion>
      </Container>
    </>
  );
}

export default Events;
