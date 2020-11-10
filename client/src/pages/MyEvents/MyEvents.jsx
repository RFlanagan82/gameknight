import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import CardDeck from "react-bootstrap/CardDeck";
import AttendingEventCard from "../../components/AttendingEventCard/AttendingEventCard";
import HostingEventCard from "../../components/HostingEventCard/HostingEventCard";
import ContainerFluid from "../../components/ContainerFluid/ContainerFluid";
import Axios from "axios";

const MyEvents = () => {
  const [hosted, setHosted] = useState([]);
  const [attending, setAttending] = useState([]);

  useEffect(() => {
    Axios.get("/api/host")
      .then((results) => {
        setHosted(results.data);
        console.log(hosted);
      }
      )
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
    <>
      <Jumbotron />
      <ContainerFluid>
        <h1 className="py-2 text-center">Hosted Events</h1>
        <CardDeck>
          {hosted.map((event) => (
            <HostingEventCard date={event.date}/>
          ))}
        </CardDeck>
        <h1 className="py-2 mt-4 text-center">Upcoming Events</h1>
        <CardDeck>
          <AttendingEventCard />
        </CardDeck>
      </ContainerFluid>
    </>
  );
};
export default MyEvents;
