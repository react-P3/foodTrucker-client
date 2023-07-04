import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddEvent from "../components/AddEvent";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

const API_URL = process.env.REACT_APP_SERVER_URL;

function FoodtruckDetailsPage() {
  const [foodtruck, setFoodtruck] = useState({});
  const { foodtruckId } = useParams();

  const getFoodtruck = () => {
    axios
      .get(`${API_URL}/api/foodtrucks/${foodtruckId}`)
      .then((response) => {
        const oneFoodtruck = response.data;
        setFoodtruck(oneFoodtruck);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFoodtruck();
  }, []);

  // note : add forms for edit and add button
  return (
    <div className="FoodtruckDetails">
      <Navbar />

      {foodtruck && (
        <>
          <h1>{foodtruck.name}</h1>
          <p>{foodtruck.category}</p>
        </>
      )}

      <AddEvent refreshFoodtrucks={getFoodtruck} FoodtruckId={foodtruck._id} />

      {foodtruck.events &&
        foodtruck.events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
    </div>
  );
}

export default FoodtruckDetailsPage;
