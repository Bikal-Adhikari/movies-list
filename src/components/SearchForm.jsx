import React from "react";
import CustomCard from "./CustomCard";

const SearchForm = () => {
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row g-5">
        <div className="col-md d-flex align-items-center">
          <form action="" className="w-100">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search movie name"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Search Movie</button>
            </div>
          </form>
        </div>
        <div className="col-md">
          <CustomCard />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
