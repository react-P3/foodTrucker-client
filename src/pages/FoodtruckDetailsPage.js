import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddEvent from "../components/AddEvent";
import EventCard from "../components/EventCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import EditFoodTruck from "../components/EditFoodtruckModal";

const API_URL = process.env.REACT_APP_SERVER_URL;

function FoodtruckDetailsPage() {
  const { isLoggedIn } = useContext(AuthContext);
  const [foodtruck, setFoodtruck] = useState({});
  const { foodtruckId } = useParams();
  const { user } = useContext(AuthContext);
  const [createdBy, setCreatedBy] = useState("");

  const getFoodtruck = () => {
    axios
      .get(`${API_URL}/api/foodtrucks/${foodtruckId}`)
      .then((response) => {
        console.log(response.data);
        const oneFoodtruck = response.data;
        setFoodtruck(oneFoodtruck);
        setCreatedBy(oneFoodtruck.createdBy);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFoodtruck();
  }, []);

  console.log("user", user);
  // note : add forms for edit and add button
  return (
    <Container className="FoodtruckDetails">
      <Row>
        {foodtruck && (
          <>
            <h1>{foodtruck.name}</h1>
            <Col xs={12}>
              <Image
                style={{ width: "18rem" }}
                src={foodtruck.imageUrl}
                fluid
                rounded
              />
            </Col>

            <h5>Category: {foodtruck.category}</h5>
            <h5>Owner: {foodtruck.owner}</h5>
            {isLoggedIn && <EditFoodTruck createdBy={createdBy} />}
          </>
        )}

        {isLoggedIn && (
          <AddEvent
            refreshFoodtrucks={getFoodtruck}
            foodtruckId={foodtruck._id}
          />
        )}
        {foodtruck.events &&
          foodtruck.events.map((event) => (
            <Col key={event._id} xs={3} className="mb-5">
              <br />
              <EventCard {...event} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default FoodtruckDetailsPage;
