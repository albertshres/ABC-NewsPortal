import axios from "axios";
import { config } from "../config";

let { baseUrl } = config;

export const fetchNewsByCategories = (category) => {
  const url = category
    ? `${baseUrl}/api/news-list?limit=1000&filter[category]=${category}`
    : `${baseUrl}/api/news-list?limit=1000&filter[category]=world`;

  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
