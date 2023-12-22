import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Slide1, Slide2, Slide3 } from './Slide';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide1></Slide1></SwiperSlide>
                <SwiperSlide><Slide2></Slide2></SwiperSlide>
                <SwiperSlide><Slide3></Slide3></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;