
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Slide = ({children}) => <SwiperSlide>{children}</SwiperSlide>

const Slider = (props) => {
    return (
        <Swiper>
            {props.children}
        </Swiper>
    );
};

export default Slider;