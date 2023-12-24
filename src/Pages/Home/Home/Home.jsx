import React from 'react';
import Banner from '../Banner/Banner';
import PhoneCategory from '../PhoneCategory/PhoneCategory';
import PhoneCategories from '../PhoneCategory/PhoneCategories';
import NewProducts from '../NewProducts/NewProducts';

const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <PhoneCategories></PhoneCategories>

    <NewProducts></NewProducts>
        </div>
    );
};

export default Home;