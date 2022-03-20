import React from "react";
import sliderOne from "../../assets/images/sliderOne.jpg";
import sliderTwo from "../../assets/images/sliderTwo.jpg";
import sliderThree from "../../assets/images/sliderThree.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Slider = () => {
	return (
		<section className="py-12">
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				className="mySwiper"
				slidesPerView={1}
				autoplay
			>
				<SwiperSlide>
					<img className="rounded" src={sliderOne} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded" src={sliderTwo} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="rounded" src={sliderThree} alt="" />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Slider;
