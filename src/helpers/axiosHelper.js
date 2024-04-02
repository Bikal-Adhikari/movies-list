import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=1aabd514&t=";
const fetchFromAPI = async (str) => {
  const response = await axios.get(apiUrl + str);
  return response.data;
};

export default fetchFromAPI;
