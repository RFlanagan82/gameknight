import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import ProfileCardModal from "../../components/ProfileCardModal/ProfileCardModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import "./HostingEventCard.css"

const HostingEventCard = ({
  event,
  setNewEvent,
  getHostedEvents,
  toggleEventModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const handleDelete = function (id) {
    // console.log(id);
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        // console.log(res.data);
        getHostedEvents();
        setShowConfirm();
      })
      .catch((err) => console.log(err));
  };
  const toggleModal = function () {
    setShowModal(!showModal);
  };

  const toggleConfirm = function () {
    setShowConfirm(!showConfirm);
  };

  return (
    <>
      <Card className="mx-4 bg-secondary knight-font">
        <Card.Header as="h5" className="text-center header">
          <u>{event.eventName}</u>
        </Card.Header>
        <Card.Body className="text-center text-white">
          <Card.Text as="h5">
            {moment(event.date).format("LL")} at {" "} {moment(event.gameTime).format("LT")}
          </Card.Text>
          <Card.Text as="h5">
          {event.city && event.state ? <>{event.city}{", "}{event.state}</> : ""} 
          </Card.Text>
          <Card.Text>
           {event.gameName} | {event.gameCategory}
          </Card.Text>
          
          <Card.Text>
            <b>Users Attending:</b>{" "}
            {event.attendees.map((user, index) => (
              <Button
                key={index}
                variant="link"
                id="hosteventlink"
                onClick={(e) => {
                  setUser(user);
                  toggleModal();
                }}
              >
                {user.userName}
              </Button>
            ))}
          </Card.Text>
          <Card.Text>
          {event.maxAttendees - event.attendees.length} Spots Left 
          </Card.Text>
          
          <Card.Text>
            {event.eventLink ? <><b>Event Link:</b> <a href={event.eventLink} target="_blank" id="hosteventlink" rel="noreferrer">{event.eventLink}</a></> : ""}
          </Card.Text>
          <Card.Text>
            <b>Description:</b> {event.description}
          </Card.Text>
          <Button
          className="maroonbtn"
            onClick={toggleConfirm}
          >
            <i className="far fa-trash-alt mr-1"></i>Delete
          </Button>
          <Button
            className="ml-2"
            variant="warning"
            onClick={(e) => {
              setNewEvent(event);
              toggleEventModal();
            }}
          >
            <i className="far fa-edit mr-1"></i>Edit
          </Button>
        </Card.Body>
      </Card>
      <ProfileCardModal
        user={user}
        showModal={showModal}
        toggleModal={toggleModal}
      />
      <ConfirmationModal
        showModal={showConfirm}
        toggleModal={toggleConfirm}
        title="Delete Event"
        body={`Are you sure you want to delete the "${event.eventName}" event?`}
        confirmFunction={(e) => handleDelete(event._id)}
      />
    </>
  );
};

export default HostingEventCard;
