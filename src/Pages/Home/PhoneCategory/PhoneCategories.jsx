import React from 'react';
import PhoneCategory from './PhoneCategory';
import { FaWindows, FaApple, FaAndroid } from 'react-icons/fa';
const PhoneCategories = () => {
    const data = [
        {
          phone: 'Windows Phone',
          icon: <FaWindows />,
          color:'#8BC017',
          paragraph: 'Introducing the latest Windows Phone...'
        },
        {
          phone: 'iPhone',
          icon: <FaApple />,
          paragraph: 'Discover the innovation of the iPhone...',
          color:'#68217A'
        },
        {
          phone: 'Android Phone',
          icon: <FaAndroid />,
          paragraph: 'Experience the freedom of customization with our Android Phone...',
          color: '#8BC017'
        }
      ];
    return (
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-4 justify-center'>
            
    

     {
        data.map((data,index)=>   <PhoneCategory data={data} key={index}></PhoneCategory>)
     }
        </div>
    );
};

export default PhoneCategories;