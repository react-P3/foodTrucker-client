import {Link} from "react-router-dom";

function FoodtruckDetailsPage() {
    return (
      <div>
        <h1>FoodtruckDetails Page</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/foodtrucks/edit/:foodtruckId"><button>Edit your Details</button></Link>
        <button>Add an Event</button>
        <Link to="/foodtrucks/edit/:foodtruckId"><button>Foodtruck List</button></Link>
      </div>
    );
  }
  
  export default FoodtruckDetailsPage;