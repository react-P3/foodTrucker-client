import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_SERVER_URL;

function EditFoodTruck(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");
  const [show, setShow] = useState(false);
  const { foodtruckId } = useParams();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/foodtrucks/${foodtruckId}`)
      .then((response) => {
        const oneFoodtruck = response.data;
        setName(oneFoodtruck.Name);
        setCategory(oneFoodtruck.category);
        setOwner(oneFoodtruck.owner);
      })
      .catch((error) => console.log(error));
  }, [foodtruckId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, category, owner };
    axios
      .put(`${API_URL}/api/foodtrucks/${foodtruckId}`, requestBody)
      .then((response) => {
        navigate(`/foodtrucks/${foodtruckId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit FoodTruck
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="Auth-form" onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Edit Your Food Truck</h3>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </div>
              <div className="form-group mt-3">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Owner</label>
                <input
                  type="text"
                  name="owner"
                  value={owner}
                  onChange={(e) => {
                    setOwner(e.target.value);
                  }}
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFoodTruck;
