import axios from "axios";

const orderInstance = axios.create({
  baseURL: "https://burger-builder-25b19-default-rtdb.firebaseio.com/",
});

export default orderInstance;
