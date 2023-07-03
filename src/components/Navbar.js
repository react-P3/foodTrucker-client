import { Link } from "react-router-dom";
                    

function Navbar() {

  return (
    <nav>
      <Link to="/"><button>Home</button></Link>
      <Link to="/foodtrucks"><button>Foodtrucks</button></Link>
      <Link to="/signup"> <button>Sign Up</button> </Link>
      <Link to="/login"> <button>Login</button> </Link>      
 
    </nav>
  );
}
 
export default Navbar;