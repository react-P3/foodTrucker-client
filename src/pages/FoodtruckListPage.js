import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AddFoodtruck from "../components/AddFoodtruck";
import FoodtruckCard from "../components/FoodtruckCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_SERVER_URL;

function FoodtruckListPage() {
  const [foodtrucks, setFoodtrucks] = useState([]);

  const {isLoggedIn, user, LogOutUser} = useContext(AuthContext);
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
     
      <Row>
      {isLoggedIn && 
        <AddFoodtruck refreshFoodtrucks={getAllFoodtrucks} />
        }
        <br />
        {foodtrucks.map((foodtruck) => (
          <Col key={foodtruck._id} xs={3} className="mb-5">
            <FoodtruckCard {...foodtruck}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FoodtruckListPage;
