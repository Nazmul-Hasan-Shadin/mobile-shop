import React from 'react';
import Banner from '../Banner/Banner';
import PhoneCategory from '../PhoneCategory/PhoneCategory';
import PhoneCategories from '../PhoneCategory/PhoneCategories';
import NewProducts from '../NewProducts/NewProducts';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
    <Banner></Banner>
    <PhoneCategories></PhoneCategories>

    <NewProducts></NewProducts>
    <NewProducts isAllProduct={true}></NewProducts>

    <Footer></Footer>
        </div>
    );
};

export default Home;