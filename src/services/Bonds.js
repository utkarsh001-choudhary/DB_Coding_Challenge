import axios from "axios";

export const findBonds = () => {
  return axios.get("https://db-grads-9z8h-group-6.nw.r.appspot.com/api/v1/bonds");
};