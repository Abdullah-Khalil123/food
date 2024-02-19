import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
import './swiperr.css'
import Image from 'next/image';
import nextConfig from '../../../next.config';

export const Swiperr = ({isMobile}) => {
  return (
    <>
    <div className="swiperr-container">
      <Swiper 
        speed={1500} 
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]} 
        className="mySwiper"
      >
        <SwiperSlide><Image src={`${nextConfig.basePath}/images/slide1.webp`} width={500} height={500} alt='Slide 1 Image'/></SwiperSlide>
        <SwiperSlide><Image src={`${nextConfig.basePath}/images/slide2.webp`} width={500} height={500} alt='Slide 2 Image'/></SwiperSlide>
        <SwiperSlide><Image src={`${nextConfig.basePath}/images/slide3.webp`} width={500} height={500} alt='Slide 3 Image'/></SwiperSlide>
      </Swiper>
      {!isMobile && <SwiperExtra/>}
    </div>
    </>
  )
}

    function SwiperExtra({}) {
      return (<div className="swiperr-extra">
        <div className="swiperrFirst">
          <Image className='mb' src={`${nextConfig.basePath}/images/phone.svg`} alt='' width={300} height={300} />
          <div>03005447704</div>
        </div>
        <div className="swiperrFirst">
          <Image src={`${nextConfig.basePath}/images/clock.svg`} alt='' width={300} height={300} />
          <div>00:00 AM - 02:00 AM</div>
          <div>02:00 AM - 11:59 PM</div>
          <Image className='mb' src={`${nextConfig.basePath}/images/downHead.svg`} alt='' width={300} height={300} />
        </div>
      </div>);
    }
  