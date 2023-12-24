import axios from "axios";


export const instance= axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = () => {
    return  instance
};

export default useAxiosPublic;