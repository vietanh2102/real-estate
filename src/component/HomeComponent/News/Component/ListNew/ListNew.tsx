import classNames from 'classnames/bind';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import styles from './ListNews.module.scss'
import { useGetNewsQuery } from '../../../../../redux/blog.service';

const cx = classNames.bind(styles)
function ListNew({ newTitle }: any) {
    const { data } = useGetNewsQuery()
    const listNews = data?.filter(item => item.type === newTitle)
    return (
        <>
            <div className={cx("news-container")}>
                <div className={cx("new-info")}>
                    <Swiper
                        spaceBetween={50}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {listNews?.map(item => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div>
                                        <img loading='lazy' src={item.img} alt='err' />
                                        <span>{item.name}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className={cx("list-news")}>
                    <ul>
                        {listNews?.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx("listnews-mobile")}>
                {listNews?.map(item => (
                    <div key={item.id} className={cx('new__item')}>
                        <img src={item.img} alt='err' />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListNew;