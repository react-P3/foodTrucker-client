import { useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Button, Row, Form } from "react-bootstrap";
import service from "../api/service";

const API_URL = process.env.REACT_APP_SERVER_URL;

function AddFoodtruck(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  function handleSubmit(e) { 
    e.preventDefault();
    const requestBody = { name, category, owner, imageUrl };

    axios
      .post(`${API_URL}/api/foodtrucks`, requestBody)
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
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Row>

        <Row className="mb-3">
          <label>Category:</label>
          <textarea
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Row>
        <Row className="mb-3">
          <label>Owner:</label>
          <input
            type="text"
            name="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </Row>

        <Row className="mb-3">
        <input 
        type="file" 
        name="Image"
       
        onChange={(e) => handleFileUpload(e)} />
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
      <br />
    </Container>
  );
}

export default AddFoodtruck;
