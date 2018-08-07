import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-9be12.firebaseio.com/"
});

export default instance;
