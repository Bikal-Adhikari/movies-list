/* eslint-disable react/prop-types */
import React from "react";

const CustomCard = ({ searchedMovie, func, deleteFunc }) => {
  const { Poster, Title, imdbRating, Plot, mode } = searchedMovie;

  return (
    <div className="card flex-grow-1" style={{ width: "18rem" }}>
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="container">
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">IMDB Rating: {imdbRating}</p>
          <p>{Plot?.slice(0, 50)}...</p>
        </div>
        {!mode && (
          <div className="d-flex justify-content-between gap-2">
            <button
              onClick={() => func("drama")}
              className="btn btn-warning flex-grow-1"
            >
              Drama
            </button>
            <button
              onClick={() => func("action")}
              className="btn btn-info flex-grow-1"
            >
              Action
            </button>
          </div>
        )}
        <div className="d-grid mt-2 mb-5">
          <button onClick={() => deleteFunc()} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
