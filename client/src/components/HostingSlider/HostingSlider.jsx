import React from "react";
import Slider from "react-slick";
import HostingEventCard from "../HostingEventCard/HostingEventCard";

export default function HostingSlider({ hosted, getHostedEvents, getAttendingEvents, setNewEvent, toggleEventModal }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="mx-5" {...settings}>
      {hosted.map((event, index) => (
        <div key={index}>
          <HostingEventCard
            event={event}
            getHostedEvents={getHostedEvents}
            getAttendingEvents={getAttendingEvents}
            setNewEvent={setNewEvent}
            toggleEventModal={toggleEventModal}
          />
        </div>
      ))}
    </Slider>
  );
}
