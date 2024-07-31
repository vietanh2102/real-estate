import classNames from "classnames/bind";
import styles from "./ListLocation.module.scss"
import { useState } from "react";
import { hotLocation } from "../../constant/array";
import Button from "../Button/Button";

const cx = classNames.bind(styles)
function ListLocation() {
    const [listLocation, setListLocation] = useState(hotLocation.slice(0, 2))
    const [typeButton, setTypeButton] = useState('less')
    const handleClickButton = () => {
        if (listLocation.length > 2) {
            setTypeButton("less")
            setListLocation(hotLocation.slice(0, 2))
        } else {
            setTypeButton("more")
            setListLocation(hotLocation)
        }
    }
    return (
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
                <Button
                    title={typeButton === "less" ? "Xem thêm" : "Thu gọn"}
                    primary={true}
                    small={true}
                />
            </div>
        </div>
    );
}

export default ListLocation;