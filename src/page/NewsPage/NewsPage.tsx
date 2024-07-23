import classNames from "classnames/bind";
import styles from "./NewsPage.module.scss"
import News from "../../component/HomeComponent/News/News";
import BrokerSlice from "../../component/BrokerSlice/BrokerSlice";
import Button from "../../component/Button/Button";
import { useState } from "react";
import { hotLocation } from "../../constant/array";
const cx = classNames.bind(styles)
function NewsPage() {
    const [listLocation, setListLocation] = useState(hotLocation.slice(0, 2))
    const handleClickButton = () => {
        setListLocation(hotLocation)
    }
    return (
        <div className={cx("container")}>
            <div className={cx("intro")}>
                <div className={cx("intro-main")}>
                    <p className={cx("title")}>
                        Tin tức bất động sản mới nhất
                    </p>
                    <p className={cx("text")}>
                        Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam thông qua dữ liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo sát thực tế của đội ngũ phóng viên, biên tập của Batdongsan.com.ttvn.
                    </p>
                </div>
            </div>

            <News />

            <div className={cx("list")}>
                <div className={cx("list-news")}></div>
                <div className={cx("sidebar")}>
                    <BrokerSlice />
                    <div className={cx("hot-location")}>
                        <h2>Thị trường BĐS tại các tỉnh / thành sôi động nhất</h2>

                        <div className={cx("location-container")}>
                            {listLocation.map(item => (
                                <div key={item.id} className={cx("location-wrapper")}>
                                    <div
                                        className={cx("location-item")}
                                        style={{ background: `url(${item.img})` }}
                                        key={item.id}
                                    >
                                        <div className={cx("overlay")}>
                                            <span>{item.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={cx("button")} onClick={() => handleClickButton()}>
                            <Button title="Xem thêm" primary={true} small={true} />
                        </div>
                    </div>
                    <div className={cx("list-location")}>
                        <h2>Thị trường BĐS tại 10 tỉnh / thành phố lớn</h2>

                        <div className={cx("big-location")}>
                            {hotLocation.map(item => (
                                <div
                                    className={cx("bigLocation-item")}
                                    key={item.id}
                                >
                                    <div
                                        className={cx("item-img")}
                                        style={{ background: `url(${item.img})` }}
                                    >
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPage;