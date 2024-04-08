import { useState } from "react";
import Display from "./components/Display";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    // have the filtered array that doesn't includes the movie
    const newList = movieList.filter((m) => m.imdbID !== movie.imdbID);

    setMovieList([...newList, movie]);
  };

  const handelOnDelete = (imdbID) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      setMovieList(movieList.filter((m) => m.imdbID !== imdbID));
    }
  };
  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center">My Movie List!</h1>
        </div>
      </div>
      <hr />

      {/* search section */}

      <SearchForm addToMovieList={addToMovieList} />

      {/* movie list section */}
      <Display movieList={movieList} handelOnDelete={handelOnDelete} />
    </div>
  );
};

export default App;
