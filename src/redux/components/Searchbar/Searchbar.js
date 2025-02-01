import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.scss";
import { Dropdown, Stack, Button, Form } from "react-bootstrap";
import "../Modal/LoginModal";

const SearchBar = () => {
  return (
    <>
      <div className="container my-2">
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Tìm kiếm theo từ khóa..."
          />
          <Button variant="danger" className="d-flex align-items-center">
            <FontAwesomeIcon icon={faSearch} className="me-2" /> Search
          </Button>
          <div className="vr" />
          <Dropdown>
            <Dropdown.Toggle
              variant="btn btn-outline-danger"
              id="dropdown-basic"
            >
              Hà Nội
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Tp Hồ Chí Minh</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Đà Nẵng</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cần Thơ</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>

        {/* Filter Options */}
        <div className="d-flex flex-nowarp align-items-stretch mt-2  filter-options">
          {/* Quận/ huyện */}
          <div className="me-1">
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
    </>
  );
};

export default SearchBar;
