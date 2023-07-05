import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Button, Row, Form } from "react-bootstrap";

const API_URL = process.env.REACT_APP_SERVER_URL;

function AddFoodtruck(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = { name, category, owner };

    axios
      .post(`${API_URL}/api/foodtrucks`, requestBody)
      .then((response) => {
        // Reset the state
        setName("");
        setCategory("");
        setOwner("");
        props.refreshFoodtrucks();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container className="AddFoodtruck">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>

        <Row className="mb-3">
          <label>Category:</label>
          <textarea
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Row>
        <Row className="mb-3">
          <label>Owner:</label>
          <input
            type="text"
            name="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
      <br />
    </Container>
  );
}

export default AddFoodtruck;
