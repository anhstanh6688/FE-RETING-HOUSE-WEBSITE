import { Stack, Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faX } from "@fortawesome/free-solid-svg-icons";
import facebookIcon from "../../../public/image/facebook.png";
import googleIcon from "../../../public/image/google.png";

const LoginModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} size="lg">
        <Modal.Body>
          <div className="row">
            <div className="left-container col-5"></div>
            <div className="right-container col-7">
              <Stack className="col-md-10 mx-auto">
                {/* HEADER */}
                <div className="d-flex flex-row-reverse">
                  <Button
                    variant="light"
                    className="no-hover"
                    onClick={props.handleClose}
                  >
                    <FontAwesomeIcon icon={faX} />
                  </Button>
                </div>
                <h1 className="mx-auto mb-5">Login</h1>
                {/* Input form */}
                <Form className="input-form">
                  <Form.Label>Username</Form.Label>
                  <InputGroup className=" ">
                    <InputGroup.Text className="no-border white-background">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                      className="no-border"
                      placeholder="Type your username"
                      aria-label="Username"
                    />
                  </InputGroup>
                  <hr className="horizontal-line"></hr>
                  <Form.Label>Password</Form.Label>
                  <InputGroup className=" ">
                    <InputGroup.Text className="no-border white-background">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      className="no-border"
                      placeholder="Type your password"
                      aria-label="Password"
                    />
                  </InputGroup>
                  <hr className="horizontal-line"></hr>
                  <div>
                    <div className="forgot-password-container">
                      <p>forgot password?</p>
                    </div>
                  </div>
                  <div className="login-btn-container row">
                    <div className="col-md-1"></div>
                    <Button className=" rounded-pill custom-button col-md-10 mx-auto">
                      Login
                    </Button>
                    <div className="col-md-1"></div>
                  </div>
                  {/* another way to sign up */}
                  <div className="sign-up-container pt-3 d-flex align-items-center flex-column">
                    <p>Or Sign Up Using</p>
                    <div className="pb-5">
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

                    <p>Or Sign Up Using</p>
                    <a href="#" onClick={props.handleOpenRegister}>
                      Sign Up
                    </a>
                  </div>
                </Form>
              </Stack>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
