import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Button, Row, Form, Col } from "react-bootstrap";
import service from "../api/service";
import { DropdownButton, Dropdown } from "react-bootstrap";

const API_URL = process.env.REACT_APP_SERVER_URL;

function AddFoodtruck(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    console.log("Image path", e.target.files[0]);
    e.preventDefault();
    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    setIsUploadingImage(true);

    service
      .uploadImage(uploadData)
      .then((response) => {
        console.log("image", response.data);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err))
      .finally(() => {
        setIsUploadingImage(false);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = { name, category, owner, imageUrl: imageUrl };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/foodtrucks`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setName("");
        setCategory("");
        setOwner("");
        setImageUrl("");

        props.refreshFoodtrucks();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container className="AddFoodtruck">
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <label>NAME</label>
            <input
              className="form-control mt-1"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Col>

          <Col>
            <label>CATEGORY</label>
            <input
              className="form-control mt-1"
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Col>
          <Col>
            <label>OWNER</label>
            <input
              className="form-control mt-1"
              type="text"
              name="Owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
          </Col>

          <Col>
            <label>IMAGE</label>
            <input
              className="form-control mt-1"
              type="file"
              name="Image"
              onChange={(e) => handleFileUpload(e)}
            />
          </Col>
        </Row>
        {isUploadingImage ? (
          <button className="form-control mt-1" type="button" disabled>
            Uploading image...
          </button>
        ) : (
          <Button type="submit" variant="success" size="lg">
            Add FoodTruck
          </Button>
        )}
      </Form>
      <br />
    </Container>
  );
}

export default AddFoodtruck;
