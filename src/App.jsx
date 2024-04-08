import { useState } from "react";
import Display from "./components/Display";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    // have the filtered array that doesn't includes the movie
    const newList = movieList.filter((m) => m.imdbID !== movie.imdbID);
    console.log(newList);
    setMovieList([...newList, movie]);
  };
  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center">My Movie Collections!</h1>
        </div>
      </div>
      <hr />

      {/* search section */}

      <SearchForm addToMovieList={addToMovieList} />

      {/* movie list section */}
      <Display movieList={movieList} />
    </div>
  );
};

export default App;
