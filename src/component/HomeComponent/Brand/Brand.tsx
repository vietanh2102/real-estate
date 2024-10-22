import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

import styles from "./Brand.module.scss";
import { brandItem } from "../../../constant/array";
import BrandItem from "./component/BrandItem";
const cx = classNames.bind(styles);
function Brand() {
  const swiperRef = useRef<SwiperRef>();
  return (
    <>
      <div className={cx("brand", "onView")}>
        <p className={cx("title")}>Thương hiệu nổi bật</p>
        <div className={cx("swiper")}>
          <Swiper
            spaceBetween={16}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1300}
            modules={[Autoplay]}
          >
            {brandItem.map((item) => (
              <SwiperSlide key={item.id}>
                <BrandItem href={item.href} src={item.src} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={cx("next")}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className={cx("previous")}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
