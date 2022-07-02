import React from "react";
import location from "../../assets/locationIcon.png";
import "./Card.css";

const Card = (props) => {
  return (
    <section>
      <div className="card">
        <img src={props.info.imageUrl} alt="" className="card-img" />
        <div className="card-description">
          <div className="card-info">
            <img src={location} alt="" />
            <span className="card-info-country">{props.info.location}</span>
            <span className="card-info-link">
              <a href={props.info.googleMapsUrl}>View on Google Maps</a>
            </span>
          </div>
          <h1>{props.info.title}</h1>
          <h4>
            {props.info.startDate} - {props.info.endDate}
          </h4>
          <p>{props.info.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
