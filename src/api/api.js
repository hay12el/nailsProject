//@ts-ignore
import axios from "axios";
const API = axios.create({
  baseURL: "https://nails-project.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default API;
