import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperRef } from 'swiper'
import classNames from 'classnames/bind';
import { Autoplay, } from 'swiper/modules';

import styles from './Home.module.scss'
import Brand from '../../component/HomeComponent/Brand/Brand';
import Intro from '../../component/HomeComponent/Intro/Intro';
import LocationPost from '../../component/HomeComponent/LocationPost/LocationPost';
import News from '../../component/HomeComponent/News/News';
import Post from '../../component/HomeComponent/Post/Post';
import { brandItem } from '../../constant/array';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
const cx = classNames.bind(styles)
function Home() {
    const swiperRef = useRef<SwiperRef>()
    return (
        <div className={cx('wrapper')}>
            <News />
            <Post />
            <div className={cx("brand")}>
                <p className={cx("title")}>Thương hiệu nổi bật</p>
                <div className={cx("swiper")}>
                    <Swiper
                        spaceBetween={16}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                        }}
                        breakpoints={{
                            320: { slidesPerView: 3, },
                            480: { slidesPerView: 5, },
                            768: { slidesPerView: 4, },
                            1024: { slidesPerView: 5, },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1300}
                        modules={[Autoplay]}
                    >
                        {brandItem.map(item => (
                            <SwiperSlide key={item.id}>
                                <Brand href={item.href} src={item.src} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
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
            <LocationPost />
            <Intro />
        </div>
    );
}

export default Home;