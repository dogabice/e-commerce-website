import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/tarlaimg.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bold">Welcome to the D&B family!</h5>
              <p className="card-text fs-3 d-none d-sm-block ">
              We are here to protect your health with the freshest and most natural raw materials! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
