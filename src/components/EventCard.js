import { Card, Button } from "react-bootstrap";
import EditEvent from "./EditEventModal";

function EventCard({ _id, name, description, location, address, time, date }) {
  return (
    <Card className="EventCard card">
      <Card.Img variant="top" />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{name}</Card.Title>
        </div>
      </Card.Body>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p style={{ maxWidth: "400px" }}>{location} </p>
      <p style={{ maxWidth: "400px" }}>{address} </p>
      <p style={{ maxWidth: "400px" }}>{time} </p>
      <p style={{ maxWidth: "400px" }}>{date} </p>
      <EditEvent id={_id} />
    </Card>
  );
}
export default EventCard;
