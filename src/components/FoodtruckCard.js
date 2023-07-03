import { Link } from "react-router-dom";
<<<<<<< HEAD
import {Card, Button} from "react-bootstrap";

=======
import { Card, Button } from "react-bootstrap";
>>>>>>> 63ded139855e47fcfd380fecb6b2fe728095e221

// We are deconstructing props object directly in the parentheses of the function
function FoodtruckCard({ name, category, _id, owner }) {
  return (
    <Card className="FoodtruckCard card">
<<<<<<< HEAD
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
=======
      <Card.Img variant="top" />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
        </div>
        <Button
          href={`/foodtrucks/${_id}`}
          className="mt-auto font-weight-bold"
          variant="success"
          block
        >
          See Details
        </Button>
      </Card.Body>
>>>>>>> 63ded139855e47fcfd380fecb6b2fe728095e221
      <p style={{ maxWidth: "400px" }}>{category} </p>
      <p style={{ maxWidth: "400px" }}>{owner} </p>
    </Card>
  );
}

export default FoodtruckCard;
