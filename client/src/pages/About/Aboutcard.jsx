import React from "react";
import "./About.css";

function Aboutcard(props) {
  return (
    <div className="col-sm-6 my-4 text-center">
      <div className="card mx-auto my-auto knight-font bg-secondary" style={{ height: "100%", width: "75%" }}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title header"><u>{props.name}</u></h5>
          <p className="card-text text-white">{props.bio}</p>
          <footer className="mt-auto">
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
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
