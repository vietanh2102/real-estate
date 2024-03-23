import { useSwiper } from "swiper/react";


const SwiperButtonNext = (children: string) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
};
export default SwiperButtonNext