import { useState, useEffect } from "react";
import axios from "axios";
import AddFoodtruck from "../components/AddFoodtruck";
import FoodtruckCard from "../components/FoodtruckCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../components/Navbar";

const API_URL = "http://localhost:5005";

function FoodtruckListPage() {
  const [foodtrucks, setFoodtrucks] = useState([]);
  const getAllFoodtrucks = () => {
    axios
      .get(`${API_URL}/api/foodtrucks`)
      .then((response) => setFoodtrucks(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllFoodtrucks();
  }, []);

  return (
    <Container className="FoodtruckListPage">
      <Navbar />
      <Row>
        <AddFoodtruck refreshFoodtrucks={getAllFoodtrucks} />
        <br />

        {foodtrucks.map((foodtruck) => (
          <Col xs={3} className="mb-5">
            <FoodtruckCard key={foodtruck._id} {...foodtruck} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FoodtruckListPage;
