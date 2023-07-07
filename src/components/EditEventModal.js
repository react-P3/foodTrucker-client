import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_SERVER_URL;

function EditEvent({ id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const [createdBy, setCreatedBy] = useState("");

  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const reload = () => window.location.reload();
  console.log(id);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/events/${id}`)
      .then((response) => {
        const oneEvent = response.data;
        console.log(response.data);
        setName(oneEvent.name);
        setDescription(oneEvent.description);
        setLocation(oneEvent.location);
        setAddress(oneEvent.address);
        setTime(oneEvent.time);
        setDate(oneEvent.date);
        setCreatedBy(oneEvent.createdBy);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      description,
      location,
      address,
      time,
      date,
    };
    axios
      .put(`${API_URL}/api/events/${id}`, requestBody)
      .then((response) => {
        toast.success("event edited successfully!");
      })
      .catch((error) => console.log(error));
  };

  const deleteEvent = () => {
    axios
      .delete(`${API_URL}/api/events/${id}`)
      .then(() => {
        navigate("/foodtrucks");
      })
      .catch((err) => console.log(err));
  };

  console.log("createdBy", createdBy);
  return (
    <>
      <br />{" "}
      {user && user._id === createdBy && (
        <Button variant="outline-warning" onClick={handleShow}>
          Edit Event
        </Button>
      )}
      <Modal show={show} onHide={handleClose} onExit={reload}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
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
                />
              </div>
              <div className="form-group mt-3">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label>Adress</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label>Time</label>
                <input
                  type="text"
                  name="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label>Date</label>
                <input
                  type="date"
                  name="Date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  className="form-control mt-1"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteEvent}>
            Delete event
          </Button>
          <Button variant="success" onClick={handleFormSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEvent;
