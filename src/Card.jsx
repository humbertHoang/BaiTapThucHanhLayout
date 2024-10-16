import React from "react";
import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <div className="card text-center h-100">
      <img
        src="https://placehold.co/500x325"
        className="card-img-top"
        alt="card-img"
      />
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary mt-auto">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Card;
