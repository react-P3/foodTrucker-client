import { Card, Button } from "react-bootstrap";

function FoodtruckCard({ name, category, _id, owner }) {
  return (
    <Card className="FoodtruckCard card">
      <Card.Img variant="top" />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
        </div>
        <Button
          href={`/foodtrucks/${_id}`}
          className="mt-auto font-weight-bold"
          variant="success">
          See Details
        </Button>
      </Card.Body>
      <p style={{ maxWidth: "400px" }}>{category} </p>
      <p style={{ maxWidth: "400px" }}>{owner} </p>
    </Card>
  );
}

export default FoodtruckCard;
