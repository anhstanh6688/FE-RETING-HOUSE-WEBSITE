import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import "./Searchbar.scss";

const SearchBar = () => {
  return (
    <div className="container my-2">
      {/* Search bar */}
      <form>
        <div className="d-flex flex-nowarp align-items-center bg-light  rounded search-bar">
          {/* Search Input */}
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm theo từ khóa"
            style={{
              border: "none",
              background: "transparent",
              outline: "none",
            }}
          />
          {/* Location Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="btn btn-light" id="dropdown-basic">
              Hà Nội
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Tp. Hồ Chí Minh</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Đà Nẵng</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Search Button */}
          <button className="btn btn-danger search-btn">
            <FontAwesomeIcon icon={faSearch} /> Tìm Kiếm
          </button>
        </div>
      </form>

      {/* Filter Options */}
      <div className="d-flex flex-nowarp mt-3 filter-options">
        {/* Quận/ huyện */}
        <div className="mx-1">
          <Dropdown>
            <Dropdown.Toggle variant="btn btn-light" id="dropdown-basic">
              Quận / Huyện
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Đống Đa</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hai Bà Trưng</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tây Hồ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Giá */}
        <div className="mx-1">
          <Dropdown>
            <Dropdown.Toggle variant="btn btn-light" id="dropdown-basic">
              Giá
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dưới 1 triệu</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1 - 3 triệu</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3 - 5 triệu</Dropdown.Item>
              <Dropdown.Item href="#/action-3">5 - 8 triệu</Dropdown.Item>
              <Dropdown.Item href="#/action-3">8 - 10 triệu</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trên 10 triệu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Diện tích */}
        <div className="mx-1">
          <Dropdown>
            <Dropdown.Toggle variant="btn btn-light" id="dropdown-basic">
              Diện tích
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Dưới 30m2</Dropdown.Item>
              <Dropdown.Item href="#/action-2">30 - 50m2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">50 - 80m2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">80 - 100m2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trên 100 m2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
