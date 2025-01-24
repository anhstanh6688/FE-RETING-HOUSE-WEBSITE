import "./HomePage.scss";
import SearchBar from "../Searchbar/Searchbar";

const HomePage = (props) => {
  return (
    <>
      <div className="home-container">
        <div className="row">
          <div className="col-5 d-inline-block border left-side ">
            <SearchBar />
          </div>
          <div className=" col-7 d-inline-block border right-side">
            right Side
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
