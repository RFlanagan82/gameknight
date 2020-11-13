import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import ProfileCardModal from "../../components/ProfileCardModal/ProfileCardModal";
import "./HostingEventCard.css"

const HostingEventCard = ({
  event,
  setNewEvent,
  getHostedEvents,
  toggleEventModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const handleDelete = function (id) {
    console.log(id);
    axios
      .delete(`/api/events/${id}`)
      .then((res) => {
        console.log(res.data);
        getHostedEvents();
      })
      .catch((err) => console.log(err));
  };
  const toggleModal = function () {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card className="mx-4 bg-secondary knight-font">
        <Card.Header as="h5" className="text-center header">
          <u>{event.eventName}</u>
        </Card.Header>
        <Card.Body className="text-center text-white">
          <Card.Text>
            <h5>{moment(event.date).format("LL")} at {" "}
            {moment(event.gameTime).format("LT")}</h5>
          </Card.Text>
          <Card.Text>
            <h5>{event.city}{","}{event.state}</h5> 
          </Card.Text>
          <Card.Text>
            <b>Category:</b> {event.gameCategory}
          </Card.Text>
          <Card.Text>
            <b>Game:</b> {event.gameName}
          </Card.Text>
          <Card.Text>
            <b>Users Attending:</b>{" "}
            {event.attendees.map((user, index) => (
              <Button
                key={index}
                variant="link"
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
            <b>Spots Left:</b> {event.maxAttendees - event.attendees.length}
          </Card.Text>
          <Card.Text>
            <b>Description:</b> {event.description}
          </Card.Text>
          <Card.Text>
            <b>Event Link:</b> <a href={event.eventLink} target="_blank" id="hosteventlink" rel="noreferrer">{event.eventLink}</a>
          </Card.Text>
          <Button
          className="maroonbtn"
            // variant="warning"
            onClick={(e) => handleDelete(event._id)}
          >
            Delete
          </Button>
          <Button
            className="ml-2"
            variant="warning"
            onClick={(e) => {
              setNewEvent(event);
              toggleEventModal();
            }}
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
      <ProfileCardModal user={user} showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default HostingEventCard;
