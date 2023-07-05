import "./App.css";
import FoodtruckDetailsPage from "./pages/FoodtruckDetailsPage";
import FoodtruckListPage from "./pages/FoodtruckListPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <Toaster />
      <NavBar />
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
