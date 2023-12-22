import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://tasker-beta-server.vercel.app'
})

const useAxiosSecure = () => {

    return axiosSecure;
};


export default useAxiosSecure;