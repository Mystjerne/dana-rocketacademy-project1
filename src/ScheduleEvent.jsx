import { useState, useId } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import OutsideAlerter from "./OutsideAlerter";

function ScheduleEvent(props) {
  const [eventname, setEventName] = useState("Click me!");
  const [userInput, setUserInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");
  const [descriptionName, setDescriptionName] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
    setEventName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  function handleDescriptionInput(e) {
    setDescriptionInput(e.target.value);
    setDescriptionName(e.target.value);
  }

  const handleDescriptionSubmit = (e) => {
    e.preventDefault();
  };

  return props.slot === props.currentlyActive ? (
    <OutsideAlerter makeInActive={props.makeInActive}>
      <Container data-bs-theme="dark">
        <Row>
          <Col>
            <p style={{ color: "black" }}>Event Name</p>
          </Col>

          <Col>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleUserInput}
                value={userInput}
                type="text"
                maxLength={1000}
              />
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ color: "black" }}>Description</p>
          </Col>

          <Col>
            <form onSubmit={handleDescriptionSubmit}>
              <input
                onChange={handleDescriptionInput}
                value={descriptionInput}
                type="text"
                maxLength={1000}
              />
            </form>
          </Col>
        </Row>
      </Container>
    </OutsideAlerter>
  ) : (
    <p
      onClick={() => {
        props.setCurrentlyActive(props.slot);
      }}
    >
      {eventname}
    </p>
  );
}

// each component should check if the key that it has is = CurrentlyActive
// if it is not = currentlyactive

export default ScheduleEvent;
