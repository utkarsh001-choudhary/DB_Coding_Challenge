import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findBooks = () => {
  return axios.get("https://db-grads-9z8h-group-6.nw.r.appspot.com/api/v1/books");
  // return axios.get(`${hostNameUrl}/dogs`);
};