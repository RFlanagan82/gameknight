import { useEffect, useState } from "react";
import "./Dashboard.css";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AttendingEventCard from "../../components/AttendingEventCard/AttendingEventCard";
import HostingEventCard from "../../components/HostingEventCard/HostingEventCard";
import Col from "react-bootstrap/Col";
import axios from "axios";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";

const Dashboard = () => {
  const [hosted, setHosted] = useState([]);
  const [attending, setAttending] = useState([]);
  const [user, setUser] = useState({});
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [newProfile, setNewProfile] = useState({});
  const [profileValidated, setProfileValidated] = useState(false);

  useEffect(() => {
    getHostedEvents();
    getAttendingEvents();
    getUserInfo();
  }, []);

  const getHostedEvents = function () {
    axios
      .get("/api/host")
      .then((results) => {
        setHosted(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAttendingEvents = function () {
    axios
      .get("/api/attend")
      .then((results) => {
        setAttending(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserInfo = () => {
    axios
      .get("/api/users/dashboard")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setNewProfile(res.data);
      })
      .catch((err) => console.log(err));
  };

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
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
      console.log("UPDATE PROFILE");
      console.log(newProfile);
      axios
        .put("/api/users", newProfile)
        .then((res) => {
          console.log(res.data);
          toggleProfileModal();
          getUserInfo();
          setProfileValidated(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-5">
            <ProfileCard user={user} toggleProfileModal={toggleProfileModal} />
          </Col>
          <Col>
            <h1 className="py-2 text-center">Hosted Events</h1>
            {hosted.map((event) => (
              <HostingEventCard {...event} getHostedEvents={getHostedEvents} />
            ))}
            <h1 className="py-2 mt-4 text-center">Upcoming Events</h1>
            {attending.map((event) => (
              <AttendingEventCard
                {...event}
                getAttendingEvents={getAttendingEvents}
              />
            ))}
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
    </>
  );
};

export default Dashboard;
