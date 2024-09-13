import axios from "axios";
import { config } from "../config";

let { baseUrl, app_key } = config;

export const fetchNewsByNewsSource = () => {
  const url = "hhts:/dfsdf"

  axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
