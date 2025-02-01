import {
  Stack,
  Form,
  InputGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./RegisterModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faX,
  faEnvelope,
  faPhone,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import facebookIcon from "../../../public/image/facebook.png";
import googleIcon from "../../../public/image/google.png";

const RegisterModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} size="xl">
        <Modal.Body>
          <div className="row">
            <div className="left-container2 col-6"></div>
            <div className="right-container col-6">
              <Stack className="col-md-10 mx-auto">
                {/* HEADER */}
                <div className="d-flex flex-row-reverse">
                  <Button
                    variant="light"
                    className="no-hover"
                    onClick={props.handleClose}
                  >
                    <FontAwesomeIcon icon={faX} size="lg" />
                  </Button>
                </div>
                <h1 className="mx-auto mb-3">Sign up</h1>
                {/* Input form */}
                <Form className="input-form">
                  <div className="row">
                    <div className="col-6">
                      <FormLabel>Username</FormLabel>
                      <InputGroup size="md">
                        <InputGroup.Text className="white-background no-border">
                          <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <FormControl
                          className="no-border"
                          placeholder="Type your username"
                        ></FormControl>
                      </InputGroup>
                      <hr className="horizontal-line"></hr>
                    </div>
                    <div className="col-6">
                      <FormLabel>Gender</FormLabel>
                      <Form.Select
                        aria-label="Default select example"
                        size="md"
                      >
                        <option>Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </div>
                  </div>

                  <FormLabel>Email</FormLabel>
                  <InputGroup size="md">
                    <InputGroup.Text className="white-background no-border">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <FormControl
                      className="no-border"
                      placeholder="Type your email"
                    ></FormControl>
                  </InputGroup>
                  <hr className="horizontal-line"></hr>

                  <FormLabel>Phone number</FormLabel>
                  <InputGroup size="md">
                    <InputGroup.Text className="white-background no-border">
                      <FontAwesomeIcon icon={faPhone} />
                    </InputGroup.Text>
                    <FormControl
                      className="no-border"
                      placeholder="Type your phone number"
                    ></FormControl>
                  </InputGroup>

                  <hr className="horizontal-line"></hr>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <InputGroup.Text className="white-background no-border">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <FormControl
                      className="no-border"
                      placeholder="Type your password"
                    ></FormControl>
                  </InputGroup>
                  <hr className="horizontal-line"></hr>
                  <FormLabel>Confirm password</FormLabel>
                  <InputGroup size="md">
                    <InputGroup.Text className="white-background no-border">
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                    <FormControl
                      className="no-border"
                      placeholder="Confirm your password"
                    ></FormControl>
                  </InputGroup>
                  <hr className="horizontal-line"></hr>
                  <div className="pb-3">
                    <div className="have-account-container">
                      <a href="#" onClick={props.handleOpenLogin}>
                        Already have Account?
                      </a>
                    </div>
                  </div>
                  <div className="login-btn-container row">
                    <div className="col-md-1"></div>
                    <Button className=" rounded-pill register-button col-md-10 mx-auto">
                      Sign Up
                    </Button>
                    <div className="col-md-1"></div>
                  </div>
                </Form>
                {/* Other way to sign up */}
                <div className="other-signup-container pt-3 d-flex align-items-center flex-column">
                  <p>Or Sign Up Using</p>
                  <div className="">
                    <img
                      src={facebookIcon}
                      alt="sign up with facebook"
                      className="img-fluid icon mx-2"
                    ></img>
                    <img
                      src={googleIcon}
                      alt="sign up with facebook"
                      className="img-fluid icon mx-2"
                    ></img>
                  </div>
                </div>
              </Stack>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
