import { useState, name, category, owner } from "react";
import axios from 'axios';

const API_URL = "http://localhost:5005";

function AddFoodtruck(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [owner, setOwner] = useState("");

  function handleSubmit(e) {
        e.preventDefault();
        const requestBody = { name, category, owner };


        axios
            .post(`${API_URL}/api/foodtrucks`, requestBody)
            .then((response) => {
                // Reset the state
                setName("");
                setCategory("");
                setOwner("");
                props.refreshFoodtrucks();
            })
            .catch((error) => console.log(error));
    }

return (
  <div className="AddFoodtruck">
    <h3>Add Foodtruck</h3>

    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Category:</label>
      <textarea
        type="text"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

<label>Owner:</label>
      <input
        type="text"
        name="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default AddFoodtruck;
