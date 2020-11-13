import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditProfileModal = ({
  newProfile,
  showProfileModal,
  toggleProfileModal,
  setNewProfile,
  updateProfile,
  profileValidated,
}) => {
  return (
    <Modal show={showProfileModal} onHide={toggleProfileModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={profileValidated} onSubmit={updateProfile}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              value={newProfile.userName}
              onChange={(e) =>
                setNewProfile({
                  ...newProfile,
                  userName: e.currentTarget.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              required
              value={newProfile.city}
              onChange={(e) =>
                setNewProfile({
                  ...newProfile,
                  city: e.currentTarget.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              required
              value={newProfile.state}
              onChange={(e) =>
                setNewProfile({
                  ...newProfile,
                  state: e.currentTarget.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="profileImage">
            <Form.Label>
              Want to add a profile image? Enter the link here!
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={newProfile.image}
              onChange={(e) =>
                setNewProfile({
                  ...newProfile,
                  image: e.currentTarget.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="ageRange">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              as="select"
              custom
              value={newProfile.ageRange}
              onChange={(e) =>
                setNewProfile({
                  ...newProfile,
                  ageRange: e.currentTarget.value,
                })
              }
            >
              <option value="" className="disabled">
                Choose your age range
              </option>
              <option value="13-18">13-18</option>
              <option value="19-25">19-25</option>
              <option value="25-39">25-39</option>
              <option value="40-54">40-54</option>
              <option value="55+">55+</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select an age range.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>About Me</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              value={newProfile.bio}
              onChange={(e) =>
                setNewProfile({
                  ...newProfile,
                  bio: e.currentTarget.value,
                })
              }
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button className="mr-1" variant="warning" type="submit">
              Save Changes
            </Button>
            <Button
              className="ml-1"
              variant="warning"
              onClick={toggleProfileModal}
            >
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
