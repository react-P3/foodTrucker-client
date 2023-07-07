import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <br />
          <Image
            src="https://images.pexels.com/photos/1766682/pexels-photo-1766682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-fluid shadow-4"
            rounded
            alt="foodtruck"
          />
        </Col>
      </Row>
      <div>
        <br />
        <Button href="/foodtrucks" size="lg" variant="warning">
          Check out our FoodTrucks
        </Button>
      </div>
      <br />
      <br />
    </Container>
  );
}

export default HomePage;
