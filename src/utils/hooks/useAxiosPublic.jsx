import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tasker-beta-server.vercel.app'
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;