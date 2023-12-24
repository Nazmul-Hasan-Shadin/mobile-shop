import axios from "axios";


export const instance= axios.create({
    // baseURL:'http://localhost:5000',
    baseURL: 'https://mobile-shop-abdbf.web.app'
})

const useAxiosPublic = () => {
    return  instance
};

export default useAxiosPublic;