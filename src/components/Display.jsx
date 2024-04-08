/* eslint-disable react/prop-types */
import React from "react";
import CustomCard from "./CustomCard";

const Display = ({ movieList }) => {
  console.log(movieList);

  return (
    <div className="bg-black mt-5 p-5 rounded">
      <div className="row">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-primary">
              All
            </button>
            <button type="button" className="btn btn-warning">
              Drama
            </button>
            <button type="button" className="btn btn-info">
              Action
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col d-flex flex-wrap gap-2">
          {movieList?.map((searchedMovie) => (
            <CustomCard
              key={searchedMovie.imdbID}
              searchedMovie={searchedMovie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
