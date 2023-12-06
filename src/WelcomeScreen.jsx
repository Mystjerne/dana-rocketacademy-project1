import { useState, useId } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";

function WelcomeScreen(props) {
  function handleUsernameInput(e) {
    props.setUsernameInput(e.target.value);
    props.setUserName(e.target.value);
  }

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <img src="assets/darciebaby.png" />
          <p>Welcome! First, enter your username to get started:</p>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
          <form onSubmit={handleUsernameSubmit}>
            <input
              onChange={handleUsernameInput}
              value={props.usernameInput}
              type="text"
              maxLength={1000}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeScreen;
