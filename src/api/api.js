//@ts-ignore
import axios from "axios";
const API = axios.create({
  baseURL: "https://2c56-2a02-14f-173-18b5-7c14-aac0-8485-4609.ngrok-free.app/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default API;
