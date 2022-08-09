import axios from "axios";
import { hostNameUrl } from "../config/api";

export const findTrades = () => {
  return axios.get(`${hostNameUrl}/trades`);
};