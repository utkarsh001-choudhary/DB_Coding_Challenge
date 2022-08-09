import axios from "axios";
import { hostNameUrl } from "../config/api";

export const findBonds = () => {
  return axios.get(`${hostNameUrl}/bonds`);
};

export const findBondById = (id) => {
  return axios.get(`${hostNameUrl}/bonds/${id}`);  
}