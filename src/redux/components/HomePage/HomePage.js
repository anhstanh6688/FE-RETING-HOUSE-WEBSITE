import "./HomePage.scss";
import SearchBar from "../Searchbar/Searchbar";

const HomePage = (props) => {
  return (
    <>
      <div className="home-container">
        <div className="row">
          <div className="col-5 border left-side ">
            <SearchBar />
            <hr />
          </div>
          <div className="col-7 border right-side">right Side</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
