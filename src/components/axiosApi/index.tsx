import axios from "axios";

const axiosPath = "http://localhost:8080/api";

const Api = axios.create({
  baseURL: axiosPath,
});

export default Api;
