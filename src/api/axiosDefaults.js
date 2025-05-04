import axios from "axios";

axios.defaults.baseURL = "https://purple-vibes-backend-1acc8e595a6f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;



export const axiosReq = axios.create();
export const axiosRes = axios.create();