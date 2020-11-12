import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePick from "../../components/DatePick/DatePick";
import TimePick from "../../components/TimePick/TimePick";

const EditEventModal = ({
  newEvent,
  showEventModal,
  toggleEventModal,
  setNewEvent,
  updateEvent,
  eventValidated,
  setDateTime,
  setGameTime,
}) => {
  return (
    <Modal show={showEventModal} onHide={toggleEventModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={eventValidated} onSubmit={updateEvent}>
          <Form.Group controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={newEvent.eventName}
              onChange={(e) =>
                setNewEvent({ ...newEvent, eventName: e.currentTarget.value })
              }
            />

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Date: </Form.Label>
            <DatePick
              id="date"
              value={new Date(newEvent.date)}
              setDateTime={setDateTime}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Event Time: </Form.Label>
            <TimePick
              id="gameTime"
              value={new Date(newEvent.gameTime)}
              setGameTime={setGameTime}
            />
          </Form.Group>
          <Form.Group controlId="gameCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Game Category"
              value={newEvent.gameCategory}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  gameCategory: e.currentTarget.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="gameName">
            <Form.Label>Game</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Game Name"
              value={newEvent.gameName}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  gameName: e.currentTarget.value,
                })
              }
            />
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City"
                value={newEvent.city}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    city: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="State"
                value={newEvent.state}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    state: e.currentTarget.value,
                  })
                }
              />
            </Form.Group>
          </Form.Group>
          <Form.Group controlId="eventLink">
            <Form.Label>Add a link to your virtual event here!</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Event Link"
              value={newEvent.eventLink}
              onChange={(e) =>
                setNewEvent({ ...newEvent, eventLink: e.currentTarget.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="maxAttendees">
            <Form.Label>Max attendees</Form.Label>
            <Form.Control
              required
              type="number"
              min="1"
              placeholder="1"
              value={newEvent.maxAttendees}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  maxAttendees: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>

            <Form.Control
              required
              type="text"
              as="textarea"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({
                  ...newEvent,
                  description: e.currentTarget.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="text-center">
            <Button className="mr-1" variant="warning" type="submit">
              Save Changes
            </Button>
            <Button className="ml-1" variant="warning" onClick={toggleEventModal}>
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditEventModal;
