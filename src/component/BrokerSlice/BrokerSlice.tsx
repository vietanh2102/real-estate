import { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { A11y, Navigation, Pagination } from "swiper/modules"
import classNames from "classnames/bind";
import styles from './BrokerSlice.module.scss'
import { broker } from "../../constant/array";

const cx = classNames.bind(styles)

function BrokerSlice() {
    return (
        <div className={cx("sidebar-box")}>
            <h4 className={cx("box-title")}>Nhà môi giới trong khu vực</h4>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#E03C31"
                } as CSSProperties}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Navigation, A11y]}
                className={cx("mySwiper")}
            >
                <SwiperSlide>
                    {broker.slice(0, 4).map(item => (
                        <div key={item.id} className={cx("broker-tag")}>
                            <img className={cx("broker-avatar")} src={item.img} alt="ERR" />
                            <div className={cx("broker-info")}>
                                <div className={cx("broker-name")}>
                                    {item.name}
                                </div>
                                <div className={cx("broker-phone")}>{item.phone}</div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    {broker.slice(4, 8).map(item => (
                        <div key={item.id} className={cx("broker-tag")}>
                            <img className={cx("broker-avatar")} src={item.img} alt="ERR" />
                            <div className={cx("broker-info")}>
                                <div className={cx("broker-name")}>
                                    {item.name.length > 22 ? `${item.name.slice(0, 22)}...` : item.name}
                                </div>
                                <div className={cx("broker-phone")}>{item.phone}</div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    {broker.slice(8, 12).map(item => (
                        <div key={item.id} className={cx("broker-tag")}>
                            <img className={cx("broker-avatar")} src={item.img} alt="ERR" />
                            <div className={cx("broker-info")}>
                                <div className={cx("broker-name")}>
                                    {item.name.length > 22 ? `${item.name.slice(0, 22)}...` : item.name}
                                </div>
                                <div className={cx("broker-phone")}>{item.phone}</div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BrokerSlice;