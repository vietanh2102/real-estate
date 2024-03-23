import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/bundle";
import { Pagination, Navigation, A11y } from 'swiper/modules';

import styles from './Intro.module.scss'
import { description } from '../../../constant/array';
const cx = classNames.bind(styles)
function Intro() {

    return (
        <div className={cx("intro")}>
            <div className={cx("box")}>
                <div className={cx('box-pc')}>
                    {description.map(item => {
                        return (
                            <div className={cx("box-item")} key={item.id}>
                                <div className={cx("item-img")}>
                                    <img loading='lazy' src={item.img} alt='erro' />
                                </div>
                                <div className={cx("item-title")}>
                                    {item.title}
                                </div>
                                <div className={cx("item-description")}>
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cx('box-mobile')}>
                    <Swiper
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
            </div>
        </div>
    );
}

export default Intro;