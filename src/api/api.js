//@ts-ignore
import axios from "axios";
const API = axios.create({
  baseURL: "https://nails-project.onrender.com",
  // baseURL: "https://31df-2a06-c701-441a-2a00-9c6d-ef45-6751-71f.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default API;
