import { CSSProperties, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import classNames from "classnames/bind"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import { A11y, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules"


import { Post } from "../../types/PostType"
import styles from './DetailPage.module.scss'
import homeIcon from './../../assets/svg/homeIcon.svg'
import floorIcon from './../../assets/svg/floorIcon.svg'
import roomIcon from './../../assets/svg/roomIcon.svg'
import priceIcon from './../../assets/img/priceIcon.webp'
import ereaIcon from './../../assets/img/ereaIcon.webp'
import toiletIcon from './../../assets/img/toiletIcon.webp'
import user from './../../assets/img/user.png'
import DetailEstate from "../../component/NewsComonenr/detail/DetailEstate"
import SimilarList from "../../component/SimilarList/SimilarList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faXmark } from "@fortawesome/free-solid-svg-icons"
import Button from "../../component/Button/Button"
import BrokerSlice from "../../component/BrokerSlice/BrokerSlice"
import SidebarBox from "../../component/SidebarBox/SidebarBox"
import { projectList, utilsList } from "../../constant/array"
import DetailPageLoading from "../../layout/loading/DetailPageLoading/DetailPageLoading"
// import { toTopPage } from "../../hooks/scrollTop"
const cx = classNames.bind(styles)
function DetaiPage() {
    const { id } = useParams()
    const [news, setNews] = useState<Post>()
    const [loading, setLoading] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const [isModalShow, setIsModalShow] = useState(false)
    const option = [
        {
            id: 0,
            tag: "Kết nối với tôi qua Zalo và gửi thêm thông tin chi tiết",
            active: false,
        },
        {
            id: 1,
            tag: "Gửi cho tôi địa chỉ chi tiết và thông tin sổ đỏ",
            active: false,
        },
        {
            id: 2,
            tag: "Gửi cho tôi báo giá chính xác nhé",
            active: false,
        },
        {
            id: 3,
            tag: " Liên hệ với tôi nếu bất động sản này chưa được bán nhé",
            active: false,
        }
    ]
    const [tagOption, setTagOption] = useState(option)
    const handlClickTag = (id: number) => {
        const updateActive = tagOption.map(item => (
            item.id === id ? { ...item, active: !item.active } : { ...item }
        ))
        setTagOption(updateActive)
    }
    useEffect(() => {
        isModalShow ? document.body.style.overflowY = "hidden"
            : document.body.style.overflowY = "scroll"
    }, [isModalShow])
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
        loading ? <DetailPageLoading /> :
            <div className={cx('container')}>
                <div className={cx("info-wrapper")}>
                    <div className={cx('slice')}>
                        <span
                            className={cx('pr-title')}
                        >{news?.title}
                        </span>
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
                                    <span className={cx('value')}>
                                        {news?.type === "thuê" ? `${news?.detail.price}tr/Tháng` : `${news?.detail.price}/m²`}
                                    </span>
                                    {news?.type === "bán" &&
                                        <span className={cx('ext')}>~{news.detail.price * news.detail.area / 1000}tỷ</span>
                                    }

                                </div>
                                <div className={cx('erea')}>
                                    <span className={cx('title')}>Diện tích</span>
                                    <span className={cx('value')}>{news?.detail.area}</span>
                                    <span className={cx('ext')}>Mặt tiền {news?.detail.facade}m²</span>
                                </div>
                                <div className={cx('room')}>
                                    <span className={cx('title')}>Phòng ngủ</span>
                                    <span className={cx('value')}>{news?.detail.room}</span>
                                </div>
                            </div>
                            <div className={cx('despcription')} >
                                <span className={cx('des-title')}> Thông tin mô tả</span>
                                {news && <div
                                    className={cx("des-conten")}
                                    dangerouslySetInnerHTML={{ __html: news.info.decription }}
                                />}
                            </div>
                            <div className={cx('detail')}>
                                <span className={cx('des-title')}>Đặc điểm bất động sản</span>
                                <DetailEstate src={ereaIcon} title={'Diện tích'} value={`${news?.detail.area}m²`} />
                                <DetailEstate src={homeIcon} title={'Mặt tiền'} value={`${news?.detail.facade}m²`} />
                                <DetailEstate src={roomIcon} title={'Số phòng ngủ'} value={news?.detail.room} />
                                <DetailEstate
                                    src={priceIcon}
                                    title={'Mức giá'}
                                    value={news?.type === 'thuê' ? `${news?.detail.price}tr/tháng` : `${news?.detail.price}tr/m²`}
                                />
                                <DetailEstate src={floorIcon} title={'Số tầng'} value={news?.detail.floor} />
                                <DetailEstate src={toiletIcon} title={'Số toilet'} value={news?.detail.tolet} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('sidebar')}>
                        <div className={cx("contact")}>
                            <div className={cx("info-user")}>
                                <div className={cx("contact-avatar")}>
                                    <img src={user} alt="err" />
                                </div>
                                <div className={cx("contact-name")}>
                                    <a>{news?.owner.name}</a>
                                </div>
                            </div>
                            <div className={cx("info-contact")}>
                                <div className={cx("contact-phone")}>
                                    <Button
                                        title={`SĐT: 0${news?.owner.phone}`}
                                        blueButton={true}
                                    />
                                </div>
                                <div
                                    onClick={() => setIsModalShow(true)}
                                    className={cx("send-contact")}
                                >
                                    <Button
                                        title={"Yêu cầu liên hệ lại"}
                                        primary={true}
                                    />
                                </div>
                                <div className={cx("popup", !isModalShow ? "hidden" : "")}>
                                    <div
                                        className={cx("overlay")}
                                        onClick={() => setIsModalShow(false)}
                                    >
                                    </div>
                                    <div
                                        className={cx("modal", !isModalShow ? "hidden" : "")}
                                    >
                                        <div className={cx("modal-header")}>
                                            <span>
                                                Yêu cầu liên hệ lại
                                            </span>
                                            <span
                                                onClick={() => setIsModalShow(false)}
                                                className={cx("close")}
                                            >
                                                <FontAwesomeIcon icon={faXmark} />
                                            </span>
                                        </div>
                                        <div className={cx("modal-conten")}>
                                            <div className={cx("tag")}>
                                                {tagOption.map((item, index) => (
                                                    <a
                                                        className={cx("tag-option", item.active === true && "active")}
                                                        onClick={() => handlClickTag(item.id)}
                                                        key={index}
                                                    >
                                                        {item.tag}
                                                    </a>
                                                ))}

                                            </div>
                                            <div className={cx("input")}>
                                                <textarea placeholder="Bạn có muốn nhắn thêm gì không?" />
                                            </div>
                                        </div>
                                        <div className={cx("modal-footer")}>
                                            <button className={cx("send")}>Tiếp tục</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("sidebar-box")}>
                            <div className={cx("note-conten")}>
                                <div className={cx("note-icon")}>
                                    <FontAwesomeIcon icon={faFlag} style={{ color: "#e03c31", }} />
                                </div>
                                <div className={cx("note-text")}>
                                    Không nên đặt cọc, giao dịch trước khi xem nhà và xác minh thông tin của người cho thuê.
                                </div>
                            </div>
                        </div>
                        <SidebarBox title="Dự án nổi bật" list={projectList} />
                        <SidebarBox title="Hỗ trợ tiện ích" list={utilsList} />
                        <BrokerSlice />
                    </div>
                    {/* {posts} */}
                </div >
                <div className={cx("similarList")}>
                    <SimilarList location={news?.location} />
                </div>
            </div>
    );
}

export default DetaiPage;