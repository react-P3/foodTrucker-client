import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Button, Row, Form, Col } from "react-bootstrap";

const API_URL = process.env.REACT_APP_SERVER_URL;

function AddEvent(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const { foodtruckId } = props;
    const requestBody = {
      name,
      description,
      location,
      address,
      time,
      date,
      foodtruckId,
    };
    const token = localStorage.getItem("authToken")
    axios
      .post(`${API_URL}/api/events`, requestBody, {headers: {Authorization:`Bearer ${token}` }})
      .then((response) => {
        // Reset the state
        setName("");
        setDescription("");
        setLocation("");
        setAddress("");
        setTime("");
        setDate("");

        props.refreshFoodtrucks();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container className="AddEvent">
      <h3>Add Event</h3>

      <Form xs="auto" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>

          <Col>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>

          <Col>
            <label>Location:</label>
            <input
              type="text"
              name="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>

          <Col>
            <label>Address:</label>
            <input
              type="text"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>

          <Col>
            <label>Time:</label>
            <input
              type="text"
              name="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </Col>
          <Col>
            <label>Date:</label>
            <input
              type="date"
              name="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Row>
        <br />

        <Button type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddEvent;
