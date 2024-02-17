import axios from 'axios'
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASEURL,
  });

export default axiosSecure