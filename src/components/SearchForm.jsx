import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import fetchFromAPI from "../helpers/axiosHelper";
import randomCHar from "../helpers/helpers";

// fetchFromAPI  is a function that returns data from the API.
const SearchForm = ({ addToMovieList }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchedMovie, setSearchedMovie] = useState({});

  useEffect(() => {
    const c = randomCHar();
    fetchMovie(c);
  }, []);

  const handelOnChange = (e) => {
    const { value } = e.target;
    setSearchStr(value);
  };
  const handelOnSubmit = (e) => {
    e.preventDefault();
    fetchMovie(searchStr);
  };

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
  };

  const func = (mode) => {
    addToMovieList({ ...searchedMovie, mode });
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
          {searchedMovie?.Response === "True" ? (
            <CustomCard func={func} searchedMovie={searchedMovie} />
          ) : (
            <div className="alert alert-danger">{searchedMovie.Error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
