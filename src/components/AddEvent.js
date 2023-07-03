import { useState, name, description, location, address, time, date} from "react";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function AddEvent(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
        e.preventDefault();
        const requestBody = { name, description, location, address, time, date, foodtruckId };
        const {foodtruckId} = props;

        axios
            .post(`${API_URL}/api/foodtrucks`, requestBody)
            .then((response) => {
                // Reset the state
                setName("");
                setDescription("");
                setLocation("");
                setAddress("");
                setTime("");
                setDate("");

                props.refreshFoodtrucks();
            })
            .catch((error) => console.log(error));
    }

return (
  <div className="AddEvent">
    <h3>Add Event</h3>

    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Description:</label>
      <textarea
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

<label>Location:</label>
      <input
        type="text"
        name="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

<label>Address:</label>
      <input
        type="text"
        name="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

<label>Time:</label>
      <input
        type="text"
        name="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

<label>Date:</label>
      <input
        type="date"
        name="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />


      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default AddEvent;
