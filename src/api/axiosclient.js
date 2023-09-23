import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://backend.getlinked.ai",
});

export default axiosClient;
