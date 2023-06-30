import {Link} from "react-router-dom";

function FoodtruckListPage() {
    return (
      <div>
        <h1>FoodtruckList Page</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/foodtrucks/create"><button>List your Foodtruck</button></Link>
      </div>
    );
  }
  
  export default FoodtruckListPage;