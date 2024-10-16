import React from "react";
import Card from "./Card";
import Banner from "./Banner";

const Body = () => {
  return (
    <>
      <section className="mt-4">
        <Banner />
      </section>
      <section className="mt-4">
        <div className="container px-lg-5">
          <div className="row gap-4">
            <div className="col">
              <Card text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, minima." />
            </div>
            <div className="col">
              <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quo voluptatum minima? Iure, sint provident." />
            </div>
            <div className="col">
              <Card text="Lorem ipsum dolor sit amet consectetur adipisicing." />
            </div>
            <div className="col">
              <Card text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi provident optio error earum possimus necessitatibus qui perspiciatis fugit ducimus eum." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
