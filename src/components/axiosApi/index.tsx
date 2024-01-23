import axios from "axios";

const AxiosPath = "http://localhost:8080";

const api = axios.create({
  baseURL: AxiosPath,
});

export default AxiosPath;
