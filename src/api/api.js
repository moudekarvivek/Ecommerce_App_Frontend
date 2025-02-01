import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,    // URL of the API server in this case our backend 
});

export default api;