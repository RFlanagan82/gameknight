import { useEffect, useState } from "react";
import "./Dashboard.css";
import Container from "../../components/Container/Container";
import Row from "../../components/Row/Row";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import AttendingEventCard from "../../components/AttendingEventCard/AttendingEventCard";
import HostingEventCard from "../../components/HostingEventCard/HostingEventCard";
import Col from "react-bootstrap/Col";
import Axios from "axios";

const Dashboard = () => {
  const [hosted, setHosted] = useState([]);
  const [attending, setAttending] = useState([]);

  useEffect(() => {
    Axios.get("/api/host")
      .then((results) => {
        setHosted(results.data);
        console.log(hosted);
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("/api/attend")
      .then((results) => {
        setAttending(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <Container>
      <Row>
        <Col>
          <ProfileCard />
        </Col>
        <Col>
          <h1 className="py-2 text-center">Hosted Events</h1>
          {hosted.map((event) => (
            <HostingEventCard {...event} />
          ))}
          <h1 className="py-2 mt-4 text-center">Upcoming Events</h1>
          {attending.map((event) => (
            <AttendingEventCard {...event} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
