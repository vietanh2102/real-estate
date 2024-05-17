import { CSSProperties, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import classNames from "classnames/bind"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { A11y, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules"


import { Post } from "../../types/PostType"
import styles from './NewPage.module.scss'
import homeIcon from './../../assets/svg/homeIcon.svg'
import floorIcon from './../../assets/svg/floorIcon.svg'
import roomIcon from './../../assets/svg/roomIcon.svg'
import priceIcon from './../../assets/img/priceIcon.webp'
import ereaIcon from './../../assets/img/ereaIcon.webp'
import toiletIcon from './../../assets/img/toiletIcon.webp'
import DetailEstate from "../../component/NewsComonenr/detail/DetailEstate"
import SimilarList from "../../component/SimilarList/SimilarList"
import NewPageLoading from "../../layout/loading/NewPageLoading/NewPageLoading"
const cx = classNames.bind(styles)
function NewPage() {
    const { id } = useParams()
    const [news, setNews] = useState<Post>()
    const [loading, setLoading] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    useEffect(() => {
        const getNew = async () => {
            setLoading(true)
            const res = await fetch(`https://r2c5kp-8080.csb.app/estates/${id}`);
            const data = await res.json();
            setNews(data);
            setLoading(false)
        }
        getNew()
    }, [id])
    return (
        loading ? <NewPageLoading /> :
            <div className={cx('container')}>
                <div className={cx("info-wrapper")}>
                    <div className={cx('slice')}>
                        <span className={cx('pr-title')}>{news?.title}</span>
                        <span className={cx('location')}>{news?.location}</span>
                        <div className={cx('thumb-gallery')}>
                            <div className={cx('swiper-slice1')}>
                                <Swiper
                                    spaceBetween={10}
                                    navigation={true}
                                    style={{
                                        "--swiper-navigation-size": 38,
                                        "--swiper-navigation-color": "black"
                                    } as CSSProperties}
                                    pagination={{
                                        el: '.swiper-fraction',
                                        clickable: true,
                                        type: 'fraction',
                                    }
                                    }
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Pagination, Navigation, Thumbs, A11y]}
                                    className={cx("mySwiper1")}
                                >
                                    {news?.img.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={cx('swiper-item')}>
                                                <img className={cx('swiper-img')} src={item} alt="err" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={cx('swiper-fraction1')}>
                                <div className={cx('swiper-fraction')}></div>
                            </div>
                            <div className={cx('swiper-slice2')}>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={6}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className={cx("mySwiper2")}
                                >
                                    {news?.img.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={cx('swiper-item2')}>
                                                <img className={cx('swiper-img')} src={item} alt="err" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('intro')}>
                                <div className={cx('price')}>
                                    <span className={cx('title')}>Mức giá</span>
                                    <span className={cx('value')}>123</span>
                                    <span className={cx('ext')}>423</span>
                                </div>
                                <div className={cx('erea')}>
                                    <span className={cx('title')}>Diện tích</span>
                                    <span className={cx('value')}>324</span>
                                    <span className={cx('ext')}>423</span>
                                </div>
                                <div className={cx('room')}>
                                    <span className={cx('title')}>Phòng ngủ</span>
                                    <span className={cx('value')}>234</span>
                                </div>
                            </div>
                            <div className={cx('despcription')}>
                                <span className={cx('des-title')}>Thông tin mô tả</span>
                            </div>
                            <div className={cx('detail')}>
                                <span className={cx('des-title')}>Đặc điểm bất động sản</span>
                                <DetailEstate src={ereaIcon} title={'Diện tích'} value={'35'} />
                                <DetailEstate src={homeIcon} title={'Mặt tiền'} value={'123'} />
                                <DetailEstate src={roomIcon} title={'Số phòng ngủ'} value={'123'} />
                                <DetailEstate src={priceIcon} title={'Mức giá'} value={'123'} />
                                <DetailEstate src={floorIcon} title={'Số tầng'} value={'123'} />
                                <DetailEstate src={toiletIcon} title={'Số toilet'} value={'123'} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('sidebar')}>
                    </div>
                </div>
                {/* {posts} */}
                <SimilarList location={news?.location} />
            </div >
    );
}

export default NewPage;