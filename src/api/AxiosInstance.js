const axios = require("axios");

const API = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api/v1",
});

export default API;
