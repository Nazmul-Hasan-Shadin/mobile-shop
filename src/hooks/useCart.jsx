import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthContext';

const useCart = () => {
    const {user}= useContext(AuthContext)
  const axiosPublic= useAxiosPublic()
    const {data:cartData=[],refetch,isLoading:isCartLoading}=useQuery({
        queryKey:['cartItem'],
        queryFn: async()=>{
            const data=await axiosPublic.get(`/api/v1/getcartItems/${user?.email}`)
            return data.data
        }
    })

    return[cartData,refetch,isCartLoading]
};

export default useCart;