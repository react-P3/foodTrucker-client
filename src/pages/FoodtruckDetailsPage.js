import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddEvent from "../components/AddEvent";
import EventCard from "../components/EventCard";

const API_URL = "http://localhost:5005";

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
      <div>
        <h1>FoodtruckDetails Page</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>Add an Event</button>
        <button>Edit an Event</button>
        <Link to="/foodtrucks">
          <button>Foodtruck List</button>
        </Link>
      </div>


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
       

      <Link to="/foodtrucks">
        <button>Back to Foodtrucks</button>
      </Link>
    </div>
  ); 
}

export default FoodtruckDetailsPage;
