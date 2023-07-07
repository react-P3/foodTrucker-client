import { Card, Button } from "react-bootstrap";

function FoodtruckCard({ name, category, _id, owner, imageUrl }) {
  return (
    <Card className="FoodtruckCard card" bg="warning">
      <Card.Img variant="top" />
      <img src={imageUrl} style={{ height: "15rem" }} />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-center">
          <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
        </div>
        <Button
          href={`/foodtrucks/${_id}`}
          className="mt-auto font-weight-bold"
          variant="dark"
        >
          Upcoming Events
        </Button>
      </Card.Body>
      <p style={{ maxWidth: "400px" }}>{category} </p>
      <p style={{ maxWidth: "400px" }}>{owner} </p>
    </Card>
  );
}

export default FoodtruckCard;
