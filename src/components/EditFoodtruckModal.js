import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/auth.context";

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
  const reload = () => window.location.reload();
  const { user } = useContext(AuthContext);
  const [createdBy, setCreatedBy] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/foodtrucks/${foodtruckId}`)
      .then((response) => {
        const oneFoodtruck = response.data;
        setName(oneFoodtruck.name);
        setCategory(oneFoodtruck.category);
        setOwner(oneFoodtruck.owner);
        setCreatedBy(oneFoodtruck.createdBy);
      })
      .catch((error) => console.log(error));
  }, [foodtruckId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, category, owner };
    axios
      .put(`${API_URL}/api/foodtrucks/${foodtruckId}`, requestBody)
      .then((response) => {
        toast.success("event edited successfully!");
      })
      .catch((error) => console.log(error));
  };

  const deleteFoodtruck = () => {
    axios
      .delete(`${API_URL}/api/foodtrucks/${foodtruckId}`)
      .then(() => {
        navigate("/foodtrucks");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="mb-2">
        {user._id === createdBy && (
          <Button variant="primary" onClick={handleShow}>
            Edit FoodTruck
          </Button>
        )}
      </div>

      <Modal show={show} onHide={handleClose} onExit={reload}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Food Truck</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="Auth-form" onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
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
                  placeholder="e.g Van Diesel"
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
          <Button variant="danger" onClick={deleteFoodtruck}>
            Delete FoodTruck
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFoodTruck;
