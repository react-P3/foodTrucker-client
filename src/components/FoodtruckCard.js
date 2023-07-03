import { Link } from "react-router-dom";
import {Card, Button} from "react-bootstrap";


// We are deconstructing props object directly in the parentheses of the function
function FoodtruckCard ( { name, category, _id, owner } ) {
  
  return (
    <Card className="FoodtruckCard card">
    <Card.Img variant="top" src={data.image}/>
    <Card.Body className="d-flex flex-column">
      <div className="d-flex mb-2 justify-content-between">
        <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
      </div>
      <Button className="mt-auto font-weight-bold" variant="success" block>See Details</Button>
    </Card.Body>
      <Link to={`/foodtrucks/${_id}`}>
      <p style={{ maxWidth: "400px" }}>{name} </p>
      </Link>
      <p style={{ maxWidth: "400px" }}>{category} </p>
      <p style={{ maxWidth: "400px" }}>{owner} </p>
    </Card>
  );
}

export default FoodtruckCard;