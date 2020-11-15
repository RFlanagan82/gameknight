import { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Col from "react-bootstrap/Col";
import axios from "axios";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import EditEventModal from "../../components/EditEventModal/EditEventModal";
import Alert from "../../components/Alert/Alert";
import AlertContext from "../../context/AlertContext";
import HostingSlider from "../../components/HostingSlider/HostingSlider";
import AttendingSlider from "../../components/AttendingSlider/AttendingSlider";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  // Setup commented out past event hooks for future use
  const history = useHistory();
  const [hosted, setHosted] = useState([]);
  // const [pastHosted, setPastHosted] = useState([]);
  const [attending, setAttending] = useState([]);
  // const [pastAttending, setPastAttending] = useState([]);
  const [user, setUser] = useState({});
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [newProfile, setNewProfile] = useState({});
  const [profileValidated, setProfileValidated] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({});
  const [eventValidated, setEventValidated] = useState(false);
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    getHostedEvents();
    getAttendingEvents();
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  const getHostedEvents = function () {
    axios
      .get("/api/host")
      .then((results) => {
        // Comment out setHosted and setPastHosted and then uncomment the below to just see all events without the date filter
        // setHosted(results.data);
        setHosted(
          results.data.filter(
            (event) =>
              Date.parse(event.date) - new Date().getTime() >= -86400000
          )
        );
        // setPastHosted(
        //   results.data.filter(
        //     (event) => Date.parse(event.date) - new Date().getTime() < -86400000
        //   )
        // );
      })
      .catch((err) => {
        setAlert({
          message: "Could not retrieve events.",
          type: "danger",
        });
      });
  };

  const getAttendingEvents = function () {
    axios
      .get("/api/attend")
      .then((results) => {
        // Comment out setAttending and setPastAttending and then uncomment the below to just see all events without the date filter
        // setAttending(results.data);
        setAttending(
          results.data.filter(
            (event) =>
              Date.parse(event.date) - new Date().getTime() >= -86400000
          )
        );
        // setPastAttending(
        //   results.data.filter(
        //     (event) => Date.parse(event.date) - new Date().getTime() < -86400000
        //   )
        // );
      })
      .catch((err) => {
        setAlert({
          message: "Could not retrieve events.",
          type: "danger",
        });
      });
  };

  const getUserInfo = () => {
    axios
      .get("/api/users/dashboard")
      .then((res) => {
        // console.log(res.data);
        setUser(res.data);
        setNewProfile(res.data);
      })
      .catch((err) => {
        setAlert({
          message: "Could not retrieve profile information.",
          type: "danger",
        });
      });
  };

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  const toggleEventModal = () => {
    setShowEventModal(!showEventModal);
  };

  const updateProfile = function (e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setProfileValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      axios
        .put("/api/users", newProfile)
        .then((res) => {
          console.log(res.data);
          toggleProfileModal();
          getUserInfo();
          getHostedEvents();
          getAttendingEvents();
          setProfileValidated(false);
        })
        .catch((err) => {
          setAlert({
            message: "Could not update profile.",
            type: "danger",
          });
        });
    }
  };

  const setDateTime = (date) => {
    setNewEvent({ ...newEvent, date });
  };
  const setGameTime = (gameTime) => {
    setNewEvent({ ...newEvent, gameTime });
  };

  const updateEvent = function (e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setProfileValidated(true);
    if (form.checkValidity() === true) {
      e.preventDefault();
      e.stopPropagation();
      axios
        .put("/api/events", newEvent)
        .then((res) => {
          console.log(res);
          toggleEventModal();
          getHostedEvents();
          setEventValidated(false);
        })
        .catch((err) => {
          setAlert({
            message: "Could not update profile.",
            type: "danger",
          });
        });
    }
  };

  return (
    <>
      <Container className="text-center knight-font">
        <Alert />
        <Row>
          <Col className="col-lg-6 mt-5">
            <ProfileCard user={user} toggleProfileModal={toggleProfileModal} />
          </Col>
          <Col className="col-lg-6 my-5">
            <h1 className="py-2 header">
              Hosted Events
            </h1>
            <Button
              variant="warning mx-2"
              onClick={() => history.push("/create-event")}
            >
              <i className="fas fa-users mr-1"></i>Host An Event
            </Button>
            <HostingSlider
              hosted={hosted}
              getHostedEvents={getHostedEvents}
              getAttendingEvents={getAttendingEvents}
              setNewEvent={setNewEvent}
              toggleEventModal={toggleEventModal}
            />

            <h1 className="py-2 mt-4 text-center header">
              Upcoming Events
            </h1>
            <Button
              variant="warning mx-2"
              onClick={() => history.push("/events")}
            >
              <i className="far fa-eye mr-1"></i>View All Events
            </Button>
            <AttendingSlider
              attending={attending}
              getAttendingEvents={getAttendingEvents}
              getHostedEvents={getHostedEvents}
            />
          </Col>
        </Row>
      </Container>
      <EditProfileModal
        newProfile={newProfile}
        showProfileModal={showProfileModal}
        toggleProfileModal={toggleProfileModal}
        setNewProfile={setNewProfile}
        updateProfile={updateProfile}
        profileValidated={profileValidated}
      />
      <EditEventModal
        newEvent={newEvent}
        showEventModal={showEventModal}
        toggleEventModal={toggleEventModal}
        setNewEvent={setNewEvent}
        updateEvent={updateEvent}
        eventValidated={eventValidated}
        setDateTime={setDateTime}
        setGameTime={setGameTime}
      />
    </>
  );
};

export default Dashboard;
