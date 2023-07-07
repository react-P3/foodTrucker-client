import { Card, Button, Row, Col } from "react-bootstrap";
import EditEvent from "./EditEventModal";

function EventCard({ _id, name, description, location, address, time, date }) {
  return (
    <Row>
      <Col sm="15">
        <Card bg="success">
          <Card.Header>
            <Card.Title className="mb-1 font-weight-bold">{name}</Card.Title>
          </Card.Header>
          <Card.Body className="d-flex flex-column mb-2 justify-content">
            <Card.Text className="mb2  flex-column">
              <p>WHAT// {description} </p>
              <p>WHERE// {location} </p>
              <p>{address} </p>
              <p>TIME// {time} </p>
              <p>DATE// {date} </p>
            </Card.Text>
            <EditEvent id={_id} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default EventCard;
