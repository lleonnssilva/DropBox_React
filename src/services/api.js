import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_API || "https://dropbox-leo.herokuapp.com"
});

export default api;
