import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllPhones = () => {
    const axiosPublic=useAxiosPublic()
    const {data:newProduct=[], isLoading,refetch}=useQuery({
        queryKey: ['newProduct'],
        queryFn: async ()=>{
            const newProducts= await axiosPublic.get('/api/v1/phones')
            return newProducts.data
        }
    })
    return [newProduct,isLoading,refetch]
};

export default useAllPhones;