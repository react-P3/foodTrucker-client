<<<<<<< HEAD
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import FoodtruckDetailsPage from './pages/FoodtruckDetailsPage';
import FoodtruckListPage from './pages/FoodtruckListPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {Route, Routes} from "react-router-dom";

=======
import "./App.css";
import FoodtruckDetailsPage from "./pages/FoodtruckDetailsPage";
import FoodtruckListPage from "./pages/FoodtruckListPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> 63ded139855e47fcfd380fecb6b2fe728095e221

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/foodtrucks" element={<FoodtruckListPage />}></Route>
        <Route
          path="/foodtrucks/:foodtruckId"
          element={<FoodtruckDetailsPage />}
        ></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
