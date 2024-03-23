import { useEffect, useRef, useState } from 'react';
import styles from './LocationPost.module.scss'
import classNames from 'classnames/bind';
import { imgSlice } from '../../../constant/array';


const cx = classNames.bind(styles)
function LocationPost() {
    const [id, setId] = useState<number>(0)
    useEffect(() => {
        const setImg = setTimeout(() => {
            id < 2 ? setId(id + 1) : setId(0)
        }, 3000);
        return () => clearTimeout(setImg)
    })

    const locationRef = useRef<HTMLDivElement>(null)
    // const locationHeith = locationRef.current?.clientHeight
    // const condition = useState(false)
    return (
        <div ref={locationRef} className={cx("container")}>
            <h3 className={cx("title")}>Bất động sản theo địa điểm</h3>
            <div className={cx("place")}>
                <div className={cx("big-place")}>
                    <div className={cx("place-item")}>
                        {imgSlice[0].bg.map((item, index) => (
                            <div key={index}>
                                <span className={cx('place-name')}>Hà Nội</span>
                                <div
                                    className={cx("slice", index === id ? "active" : "")}
                                >
                                    <img loading='lazy' src={item} alt='err' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx("small-place")}>
                    <div className={cx("place-item")}>
                        {imgSlice[1].bg.map((item, index) => (
                            <div key={index}>
                                <span className={cx('place-name')}>Tp. Hồ Chí Minh</span>
                                <div
                                    className={cx("slice", index === id ? "active" : "")}
                                >
                                    <img src={item} alt='err' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx("place-item")}>
                        {imgSlice[2].bg.map((item, index) => (
                            <div key={index}>
                                <span className={cx('place-name')}>Đà Nẵng</span>
                                <div
                                    className={cx("slice", index === id ? "active" : "")}
                                >
                                    <img src={item} alt='err' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx("place-item")}>
                        {imgSlice[3].bg.map((item, index) => (
                            <div key={index} >
                                <span className={cx('place-name')}>Bình Dương</span>
                                <div
                                    className={cx("slice", index === id ? "active" : "")}
                                >
                                    <img src={item} alt='err' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx("place-item")}>
                        {imgSlice[4].bg.map((item, index) => (
                            <div key={index}>
                                <span className={cx('place-name')}>Hoài Đức</span>
                                <div
                                    className={cx("slice", index === id ? "active" : "")}
                                >
                                    <img src={item} alt='err' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LocationPost;