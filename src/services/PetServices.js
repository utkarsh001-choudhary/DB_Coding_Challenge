import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findPets = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
  // return axios.get(`${hostNameUrl}/dogs`);
};