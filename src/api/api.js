//@ts-ignore
import axios from "axios";
const API = axios.create({
  baseURL: "https://nails-project.onrender.com",
  // baseURL: "https://8ae4-2a06-c701-4409-e700-680e-a699-175f-c1ac.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default API;
