import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Text1 } from "./Text1";
import { Text2 } from "./Text2";
import { Text3 } from "./Text3";
import { Text4 } from "./Text4";
import { Text5 } from "./Text5";
import { Text6 } from "./Text6";
import "swiper/css";
import "swiper/css/pagination";

export const TextSwiper = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Text1 />
      </SwiperSlide>
      <SwiperSlide>
        <Text2 />
      </SwiperSlide>
      <SwiperSlide>
        <Text3 />
      </SwiperSlide>
      <SwiperSlide>
        <Text4 />
      </SwiperSlide>
      <SwiperSlide>
        <Text5 />
      </SwiperSlide>
      <SwiperSlide>
        <Text6 />
      </SwiperSlide>
    </Swiper>
  );
};
