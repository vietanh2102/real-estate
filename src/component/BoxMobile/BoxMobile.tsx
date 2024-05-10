import classNames from 'classnames/bind'
import styles from "./BoxMobile.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { description } from '../../constant/array';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { CSSProperties } from 'react';

const cx = classNames.bind(styles)
function BoxMobile() {

    return (
        <div className={cx('box-mobile')}>
            <Swiper
                style={{
                    // "--swiper-pagination-bottom": "-8px",
                    "--swiper-pagination-color": "#E03C31"
                } as CSSProperties}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Navigation, A11y]}
                className={cx("mySwiper")}
            >
                {description.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className={cx("box-item")} key={item.id}>
                            <div className={cx("item-img")}>
                                <img src={item.img} alt='erro' />
                            </div>
                            <div className={cx("item-title")}>
                                {item.title}
                            </div>
                            <div className={cx("item-description")}>
                                {item.description}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BoxMobile;