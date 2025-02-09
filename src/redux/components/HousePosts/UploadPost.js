import {
  Button,
  Modal,
  Form,
  Col,
  Row,
  InputGroup,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearch,
  faDollar,
  faMinus,
  faPlus,
  faUser,
  faMotorcycle,
  faFireExtinguisher,
  faVideo,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import "./UploadPost.scss";
import { useState } from "react";
import Dropzone from "../Dropzone/Dropzone";

const UploadPost = (props) => {
  const [numberBathroom, setNumberBathroom] = useState(1);
  const [numberFloor, setNumberFloor] = useState(1);
  const [numberBedroom, setNumberBedroom] = useState(1);

  const [securityChecked, setSecurityChecked] = useState(false);
  const [PcccChecked, setPcccChecked] = useState(false);
  const [parkingChecked, setParkingChecked] = useState(false);
  const [cameraChecked, setCameraChecked] = useState(false);

  const increaseNumber = (setter, value) => {
    setter(value + 1);
  };
  const decreaseNumber = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleToggleBtn = (setter, checked) => {
    if (checked) {
      setter(false);
    } else {
      setter(true);
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        fullscreen
        className="custom-modal"
      >
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Tạo tin đăng</Modal.Title>
          <Button
            variant="light"
            onClick={props.handleClose}
            className="close-btn"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <Modal.Body className="row">
          {/* Modal content */}
          <div className="col-3"> </div>
          <Form className="col-6">
            {/* Section 1: Basic Information */}
            <section className="modal-section">
              <h5 className="section-title">Thông tin Nhà trọ</h5>
              <Row className="g-3">
                <Form.Group className="form-control">
                  <Form.Label className="section-label">
                    Địa chỉ nhà trọ
                  </Form.Label>
                  <InputGroup className="custom-input">
                    <InputGroup.Text className="no-border">
                      <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Nhập địa chỉ"
                      className="no-border"
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
            </section>

            {/* Section 2: Details */}
            <section className="modal-section">
              <h5 className="section-title">Thông tin chi tiết</h5>
              <Form.Group className="form-control">
                <Form.Label className="section-label">Loại nhà trọ</Form.Label>
                <InputGroup className="custom-input">
                  <Form.Select className="no-border">
                    <option value="">Chọn loại nhà trọ của bạn</option>
                    <option value="">phòng trọ</option>
                    <option value="">Nhà riêng chung chủ</option>
                    <option value="">Nhà mặt phố</option>
                    <option value="">Căn hộ chung cư</option>
                  </Form.Select>
                </InputGroup>
                <Row className="g-3 mt-2 mb-2">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="section-label">
                        Giá (VNĐ)
                      </Form.Label>
                      <InputGroup className="custom-input">
                        <InputGroup.Text className="no-border">
                          <FontAwesomeIcon icon={faDollar} />
                        </InputGroup.Text>
                        <Form.Control
                          type="number"
                          placeholder="Nhập giá"
                          className="no-border"
                        />
                        <InputGroup.Text className="no-border">
                          VND
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="section-label">
                        Diện tích (m²)
                      </Form.Label>
                      <InputGroup className="custom-input">
                        <Form.Control
                          type="number"
                          placeholder="Nhập diện tích"
                          className="no-border"
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
            </section>

            {/* Section 3: Additional Information */}
            <section className="modal-section">
              <h5 className="section-title">Thông tin khác</h5>
              <Row className="g-3">
                <Form.Group className="form-control">
                  <Row className="mt-2">
                    <Col sm={9}>
                      <Form.Label className="section-label">
                        Số phòng ngủ
                      </Form.Label>
                    </Col>
                    <Col sm={3}>
                      <Button
                        variant="outline-secondary"
                        className="rounded-circle"
                        onClick={() =>
                          decreaseNumber(setNumberBedroom, numberBedroom)
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <span className="mx-2">{numberBedroom}</span>
                      <Button
                        variant="outline-secondary"
                        className="rounded-circle"
                        onClick={() =>
                          increaseNumber(setNumberBedroom, numberBedroom)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col sm={9}>
                      <Form.Label className="section-label">Số Tầng</Form.Label>
                    </Col>
                    <Col sm={3}>
                      <Button
                        variant="outline-secondary"
                        className="rounded-circle"
                        onClick={() =>
                          decreaseNumber(setNumberFloor, numberFloor)
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <span className="mx-2">{numberFloor}</span>
                      <Button
                        variant="outline-secondary"
                        className="rounded-circle"
                        onClick={() =>
                          increaseNumber(setNumberFloor, numberFloor)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col sm={9}>
                      <Form.Label className="section-label">
                        Số phòng vệ sinh
                      </Form.Label>
                    </Col>
                    <Col sm={3}>
                      <Button
                        variant="outline-secondary"
                        className="rounded-circle"
                        onClick={() =>
                          decreaseNumber(setNumberBathroom, numberBathroom)
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                      <span className="mx-2">{numberBathroom}</span>
                      <Button
                        variant="outline-secondary"
                        className="rounded-circle"
                        onClick={() =>
                          increaseNumber(setNumberBathroom, numberBathroom)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                    </Col>
                  </Row>
                  <Row className="mt-2 d-flex ">
                    <Form.Label className="section-label">Khác</Form.Label>
                    <div>
                      <ToggleButton
                        type="checkbox"
                        variant="outline-dark mx-1"
                        className="custom-button"
                        checked={securityChecked}
                        value={1}
                        onClick={() =>
                          handleToggleBtn(setSecurityChecked, securityChecked)
                        }
                      >
                        <FontAwesomeIcon icon={faUser} /> Bảo vệ
                      </ToggleButton>
                      <ToggleButton
                        type="checkbox"
                        variant="outline-dark mx-1"
                        className="custom-button"
                        checked={PcccChecked}
                        value={1}
                        onClick={() =>
                          handleToggleBtn(setPcccChecked, PcccChecked)
                        }
                      >
                        <FontAwesomeIcon icon={faFireExtinguisher} /> PCCC
                      </ToggleButton>
                      <ToggleButton
                        type="checkbox"
                        variant="outline-dark mx-1"
                        className="custom-button"
                        checked={parkingChecked}
                        value={1}
                        onClick={() =>
                          handleToggleBtn(setParkingChecked, parkingChecked)
                        }
                      >
                        <FontAwesomeIcon icon={faMotorcycle} /> Chỗ để xe
                      </ToggleButton>
                      <ToggleButton
                        type="checkbox"
                        variant="outline-dark mx-1"
                        className="custom-button"
                        checked={cameraChecked}
                        value={1}
                        onClick={() =>
                          handleToggleBtn(setCameraChecked, cameraChecked)
                        }
                      >
                        <FontAwesomeIcon icon={faVideo} /> Camera
                      </ToggleButton>
                    </div>
                  </Row>
                </Form.Group>
              </Row>
            </section>

            {/* Section 4: Contact profile */}
            <section className="modal-section">
              <h5 className="section-title ">Thông tin liên hệ</h5>
              <Row>
                <Form.Group className="form-control">
                  <Form.Label className="section-label mt-2">
                    Tên liên hệ
                  </Form.Label>
                  <Form.Control
                    placeholder="Điền tên của bạn"
                    className="custom-button mb-2"
                  />
                  <Form.Label className="section-label mt-2">
                    Số điện thoại
                  </Form.Label>
                  <Form.Control
                    placeholder="Điền số điện thoại của bạn"
                    className="custom-button mb-2"
                  />
                  <Form.Label className="section-label mt-2">
                    Địa chỉ email
                  </Form.Label>
                  <Form.Control
                    placeholder="Điền email của bạn"
                    className="custom-button mb-2 "
                  />
                </Form.Group>
              </Row>
            </section>

            {/* Section 5: set post's name and post's description */}
            <section className="modal-section">
              <h5 className="section-title">Tiêu đề & mô tả</h5>
              <Form.Group className="form-control">
                <Form.Label className="section-label">Tiêu đề</Form.Label>
                <Form.Control
                  type="text"
                  className="mb-2"
                  placeholder="VD: Cho thuê nhà ở sinh viên 30m2 gần Đại học Ngoại Ngữ, Cầu Giấy."
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                />
                <Form.Text muted>Tối thiểu 30 ký tự, tối đa 99 ký tự</Form.Text>
                <div className="mb-2"></div>
                <Form.Label className="section-label">Mô tả</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Mô tả chi tiết về: tiện ích, nội thất, vị trí, ... (VD: gần trường đại học nào?)"
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                />
                <Form.Text muted>
                  Tối thiểu 30 ký tự, tối đa 3000 ký tự
                </Form.Text>
              </Form.Group>
            </section>

            {/* Section 6: import images */}
            <section className="modal-section">
              <h5 className="section-title">Thêm ảnh lên</h5>
              <Form.Group className="form-control  p-3">
                <div>
                  <Dropzone />
                </div>
              </Form.Group>
            </section>
          </Form>
          <div className="col-3"> </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer">
          <div className="d-flex justify-content-end gap-2">
            <Button variant="dark">Xem trước</Button>
            <Button variant="outline-dark">Đăng bài</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UploadPost;
