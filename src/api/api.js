//@ts-ignore
import axios from "axios";
const API = axios.create({
  baseURL: "https://nails-project.onrender.com",
  // baseURL: "https://27a1-2a06-c701-441a-2a00-9cb1-507e-dce1-606e.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default API;
