import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function FoodtruckCard ( { name, category, _id, owner } ) {
  
  return (
    <div className="FoodtruckCard card">
      <Link to={`/foodtrucks/${_id}`}>
      <p style={{ maxWidth: "400px" }}>{name} </p>
      </Link>
      <p style={{ maxWidth: "400px" }}>{category} </p>
      <p style={{ maxWidth: "400px" }}>{owner} </p>
    </div>
  );
}

export default FoodtruckCard;