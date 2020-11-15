import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import moment from "moment";
import virtualImg from "../../images/virtual.png";
import inPersonImg from "../../images/In_Person.png";
import ProfileCardModal from "../ProfileCardModal/ProfileCardModal";
import "./EventListing.css";

function EventListing(props) {
  const { jwt } = useContext(AuthContext);
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [showHostModal, setShowHostModal] = useState(false);
  const [buttonStatus, setButtonStatus] = useState({
    status: "",
    text: "Join",
  });
  const [modalMessage, setModalMessage] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    checkOpenSpaces();
    // eslint-disable-next-line
  }, []);

  const handleJoin = (id) => {
    if (!jwt) {
      history.push("/login");
    } else {
      axios
        .get(`/api/events/${id}`)
        .then((results) => {
          // console.log(results.data.data);
          if (results.data.data.hostID === results.data.data.userId) {
            setModalMessage({
              title: "Whoops...",
              body: "You're hosting this event, no need to join!",
            });
            toggleModal();
          } else if (
            results.data.data.attendees.includes(results.data.data.userId)
          ) {
            setModalMessage({
              title: "Whoops...",
              body: "You're already attending this event!",
            });
            toggleModal();
          } else {
            axios
              .put(`/api/attend/add/${id}`)
              .then((results) => {
                setModalMessage({
                  title: "Success!",
                  body: "You've been added to the event!",
                });
                toggleModal();
                props.loadEvents();
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const toggleModal = function () {
    setShowModal(!showModal);
    checkOpenSpaces();
  };

  const toggleHostModal = function () {
    setShowHostModal(!showHostModal);
  };

  const checkOpenSpaces = function () {
    if (props.maxAttendees - props.attendees.length === 0) {
      setButtonStatus({
        status: "disabled",
        text: "Event Full",
      });
    } else {
      setButtonStatus({
        status: "",
        text: "Join",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Card className="bg-secondary knight-font">
              <Card.Header
                className="text-white pt-3"
                // style={{ height: 200, width: 850 }}
              >
                <div className="row">
                  <div className="col-md-8">
                    <h2 className="eventName header">
                      <u>{props.eventName}</u>
                    </h2>
                    <h4 className="gameName">
                      <b>{props.gameName}</b> - {props.category}
                    </h4>
                    <h6>
                      Hosted by:
                      <Button
                        variant="link"
                        id="attendeventlink"
                        onClick={toggleHostModal}
                      >
                        {props.host.userName}
                      </Button>
                    </h6>
                    <h6 className="date mb-3">
                      {moment(props.date).format("LL")} at{" "}
                      {moment(props.gameTime).format("LT")}
                    </h6>
                    <Accordion.Toggle
                      as={Button}
                      variant="warning"
                      eventKey={props.eventKey}
                    >
                      Learn More!
                    </Accordion.Toggle>
                  </div>
                  <div className="col-md-4">
                    {(() => {
                      switch (props.isVirtual) {
                        case "Virtual":
                          return (
                            <img
                              src={virtualImg}
                              className="eventImage"
                              alt="Virtual event"
                            />
                          );
                        case "In Person":
                          return (
                            <img
                              src={inPersonImg}
                              className="eventImage"
                              alt="In Person event"
                            />
                          );
                        default:
                          return (
                            <img
                              src={virtualImg}
                              className="eventImage"
                              alt="Virtual event"
                            />
                          );
                      }
                    })()}
                  </div>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body className="text-white">
                  {props.city && props.state ? (
                    <p className="location">
                      {props.city}
                      {", "}
                      {props.state}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="maxAttendees">
                    Max Number of Players: {props.maxAttendees}
                  </p>
                  <p className="spotsLeft">
                    Only {props.maxAttendees - props.attendees.length} Spots
                    Left!
                  </p>
                  <p className="description">
                    Description: {props.description}
                  </p>
                  <Button
                    disabled={buttonStatus.status}
                    variant="warning"
                    onClick={(e) => handleJoin(props.eventKey)}
                  >
                    {buttonStatus.text}
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        </div>
        <Modal
          showModal={showModal}
          toggleModal={toggleModal}
          title={modalMessage.title}
          body={modalMessage.body}
        />
        <ProfileCardModal
          user={props.host}
          showModal={showHostModal}
          toggleModal={toggleHostModal}
        />
      </div>
    </>
  );
}

export default EventListing;
