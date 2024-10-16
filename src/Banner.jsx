import React from "react";

const Banner = () => {
  return (
    <div className="container px-lg-5">
      <div className="p-4 p-lg-5 bg-light rounded-3">
        <h1 className="display-3 fw-light">A Warm Welcome!</h1>
        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          corrupti adipisci iste in nam delectus perferendis eligendi laborum
          dolore, ullam, ipsum odio cum voluptate porro totam at omnis quaerat
          vero.
        </p>
        <a href="#" className="btn btn-primary btn-lg">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Banner;
