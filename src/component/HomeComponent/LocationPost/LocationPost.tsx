import { useState } from 'react';
import styles from './LocationPost.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)
function LocationPost() {
    const imgSlice = [
        {
            bg: [
                "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-2.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-3.jpg",
            ],
            location: "Hồ Chí Minh"
        },
        {
            bg: [
                "https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-1.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-2.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-3.jpg"
            ],
            location: "Hà Nội"
        },
        {
            bg: [
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-1.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-2.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-3.jpg"
            ],
            location: "Hoài Đức"
        },
        {
            bg: [
                "https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-1.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-3.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-2.jpg",
            ],
            location: "Đà Nẵng"
        },
        {
            bg: [
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-1.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-2.jpg",
                "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-3.jpg"
            ],
            location: "Bình Dương"
        }
    ]
    const [id, setId] = useState<number>(0)
    setTimeout(() => {
        id < 2 ? setId(id + 1) : setId(0)
    }, 3000);
    return (
        <div className={cx("container")}>
            <h3>Bất động sản theo địa điểm</h3>
            <div className={cx("place")}>
                <div className={cx("big-place")}>
                    <div className={cx("place-item")}>
                        {imgSlice[0].bg.map((item, index) => (
                            <><span className={cx('place-name')}>Hà Nội</span><div
                                key={index}
                                className={cx("slice", index === id ? "active" : "")}
                            >
                                <img src={item} alt='err' />
                            </div></>
                        ))}
                    </div>
                </div>
                <div className={cx("small-place")}>
                    <div className={cx("place-item")}>
                        {imgSlice[1].bg.map((item, index) => (
                            <><span className={cx('place-name')}>Tp Hồ Chí Minh</span><div
                                key={index}
                                className={cx("slice", index === id ? "active" : "")}
                            >
                                <img src={item} alt='err' />
                            </div></>
                        ))}
                    </div>
                    <div className={cx("place-item")}>
                        {imgSlice[2].bg.map((item, index) => (
                            <><span className={cx('place-name')}>Đà Nẵng</span><div
                                key={index}
                                className={cx("slice", index === id ? "active" : "")}
                            >
                                <img src={item} alt='err' />
                            </div></>
                        ))}
                    </div>
                    <div className={cx("place-item")}>
                        {imgSlice[3].bg.map((item, index) => (
                            <><span className={cx('place-name')}>Bình Dương</span><div
                                key={index}
                                className={cx("slice", index === id ? "active" : "")}
                            >
                                <img src={item} alt='err' />
                            </div></>
                        ))}
                    </div>
                    <div className={cx("place-item")}>
                        {imgSlice[4].bg.map((item, index) => (
                            <><span className={cx('place-name')}>Hoài Đức</span><div
                                key={index}
                                className={cx("slice", index === id ? "active" : "")}
                            >
                                <img src={item} alt='err' />
                            </div></>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationPost;