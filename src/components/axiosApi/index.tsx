import axios from "axios";

const axiosPath = "http://localhost:8080";

const api = axios.create({
  baseURL: axiosPath,
});

export default axiosPath;
