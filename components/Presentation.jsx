import React from "react";

export const Presentation = () => {
  return (
    <div className="container w-75">
      <div className="p-1 mb-3 bg-secondary bg-opacity-25">
        <div className="container-fluid py-4">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            inventore. Sapiente voluptatum tempore nisi distinctio
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Card to action!
          </button>
        </div>
      </div>
    </div>
  );
};
