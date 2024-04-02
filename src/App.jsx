import SearchForm from "./components/SearchForm";

const App = () => {
  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center">My Movie Collections!</h1>
        </div>
      </div>
      <hr />

      {/* search section */}

      <SearchForm />

      {/* movie list section */}
    </div>
  );
};

export default App;
