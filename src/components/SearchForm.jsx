import React, { useState } from "react";
import CustomCard from "./CustomCard";
import fetchFromAPI from "../helpers/axiosHelper";

// fetchFromAPI  is a function that returns data from the API.
const SearchForm = () => {
  const [searchStr, setSearchStr] = useState("");
  const [searchedMovie, setSearchedMovie] = useState({});

  const handelOnChange = (e) => {
    const { value } = e.target;
    setSearchStr(value);
  };
  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const movie = await fetchFromAPI(searchStr);
    setSearchedMovie(movie);
  };
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row g-5">
        <div className="col-md d-flex align-items-center">
          <form action="" className="w-100" onSubmit={handelOnSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search movie name"
                onChange={handelOnChange}
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-warning">Search Movie</button>
            </div>
          </form>
        </div>
        <div className="col-md">
          <CustomCard searchedMovie={searchedMovie} />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
