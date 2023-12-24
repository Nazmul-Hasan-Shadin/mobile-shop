import React, { useEffect } from 'react';
import useAllPhones from '../../hooks/useAllPhones';
import NewProduct from '../Home/NewProducts/NewProduct';

const AllPhones = ({search}) => {
    const [newProduct,isLoading,refetch]=useAllPhones()
    const displayData= search
    useEffect(()=>{
        if (search) {
            refetch()
        }
    },[search,refetch])
    console.log(search,'iam search from allphone');
    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                displayData?.map(pd=><NewProduct pd={pd} key={pd._id}></NewProduct>)
            }
        </div>

    );
};

export default AllPhones;