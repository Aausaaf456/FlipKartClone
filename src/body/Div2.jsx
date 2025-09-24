import './main.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Div2() {
  return (
    <div className="w-full  mt-6 h-[150px] sm:h-[200px] md:h-[250px] sm:mt-6 md:mt-6 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
        <a href='#' className='cursor-pointer'>
          <img src="/assets1/slide1.webp" alt="Banner 1" className="w-full h-full object-cover" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#' className='cursor-pointer'>
          <img src="/assets1/slide2.webp" alt="Banner 2" className="w-full h-full object-cover" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#' className='cursor-pointer'>
          <img src="/assets1/slide3.webp" alt="Banner 3" className="w-full h-full object-cover" />
        </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}