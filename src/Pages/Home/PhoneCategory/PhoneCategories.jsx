import React from 'react';
import PhoneCategory from './PhoneCategory';

const PhoneCategories = () => {
    return (
        <div className=' flex flex-col lg:flex-row gap-4 justify-center'>
             <PhoneCategory></PhoneCategory>
    <PhoneCategory></PhoneCategory>
    <PhoneCategory></PhoneCategory>
        </div>
    );
};

export default PhoneCategories;