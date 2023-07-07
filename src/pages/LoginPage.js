import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = process.env.REACT_APP_SERVER_URL;

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        authenticateUser();

        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLoginSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-success">
              Login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <p>Don't have an account yet?</p>
          <Link to={"/signup"}> Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
