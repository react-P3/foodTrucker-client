import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getFoodtrucks = () => {
  return api
    .get("/foodtrucks")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return api
    .post("/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createFoodtruck = (newFoodtruck) => {
  return api
    .post("/foodtrucks", newFoodtruck)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default {
  getFoodtrucks,
  uploadImage,
  createFoodtruck,
};
