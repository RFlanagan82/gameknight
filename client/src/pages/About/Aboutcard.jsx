import React from "react";
import "./About.css";

function Aboutcard(props) {
  return (
    <div className="col-sm-6 my-4 text-center">
      <div className="card mx-auto my-auto" style={{ height: "100%", width: "75%" }}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.bio}</p>
          <a
            href={props.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            LinkedIn
          </a>
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Github
          </a>
          <a
            href={props.email}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
