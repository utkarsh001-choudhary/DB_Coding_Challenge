import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findBooks = () => {
  return axios.get(`${hostNameUrl}/books`);
};