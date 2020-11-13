import React from "react";
import Slider from "react-slick";
import AttendingEventCard from "../../components/AttendingEventCard/AttendingEventCard";

export default function AttendingSlider({ attending, getAttendingEvents, getHostedEvents }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="mx-5" {...settings}>
      {attending.map((event, index) => (
        <div>
          <AttendingEventCard
            key={index}
            event={event}
            getHostedEvents={getHostedEvents}
            getAttendingEvents={getAttendingEvents}
          />
        </div>
      ))}
    </Slider>
  );
}
