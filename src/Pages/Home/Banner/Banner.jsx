import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import slider1 from '../../../assets/image/slide_1.jpg'
import slider2 from '../../../assets/image/slide_2.jpg'
import slider3 from '../../../assets/image/slide_3.jpg'

const Banner = () => {
    return (
        <div className='mb-12'>
              <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='relative'>
                <img src={slider1} alt="" />
                <div className='absolute right-72 space-y-2 top-1/3 text-white'>
                    <h2 className='text-4xl '>Samphony V48</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatibus maiores quas obcaecati. Tenetur, vitae!</p>
                    <button className='btn w-32 bg-slate-900 text-white'>Buy Now</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider2} alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img src={slider3} alt="" />
            </div>
        </SwiperSlide>
    
      </Swiper>
  
        </div>
    );
};

export default Banner;