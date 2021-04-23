import axios from "axios";

const instance = axios.create({
  baseURL: "https://tik-tok-backend-site.herokuapp.com",
});
export default instance;
