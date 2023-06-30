import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddFoodtruck from "../components/AddFoodtruck";
import FoodtruckCard from "../components/FoodtruckCard";

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
    <div className="FoodtruckListPage">
      <div>
        <h1>FoodtruckList Page</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <AddFoodtruck refreshFoodtrucks={getAllFoodtrucks} />

      {foodtrucks.map((foodtruck) => (
        <FoodtruckCard key={foodtruck._id} {...foodtruck} />
      ))}
    </div>
  );
}

export default FoodtruckListPage;
