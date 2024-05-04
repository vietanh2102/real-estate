import classNames from 'classnames/bind'

// Import Swiper styles
import "swiper/css/bundle";

import styles from './Intro.module.scss'
import { description } from '../../../constant/array';
import { useEffect, useRef, useState } from 'react';
import { IsIntoView } from '../../../hooks/IsIntoView';
import BoxMobile from '../../Popup/BoxMobile';
const cx = classNames.bind(styles)
function Intro() {
    const [isIntoViewTitle, setIsIntoViewTitle] = useState(false)
    const [isIntoView, setIsIntoView] = useState(false)
    const refPost = useRef(null)
    const refTitle = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            IsIntoView(refPost, setIsIntoView)
            IsIntoView(refTitle, setIsIntoViewTitle)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div className={cx("intro")}>
            <div className={cx("box")}>
                <h1
                    ref={refTitle}
                    className={cx('title', isIntoViewTitle ? "onView" : "")}
                >
                    Dịch vụ của chúng tôi
                </h1>
                <div className={cx('box-pc')}>
                    {description.map(item => {
                        return (
                            <div
                                className={cx(`box-item`, `delay-${item.id}`, isIntoView ? "onView" : "")}
                                key={item.id}
                                ref={refPost}
                            >
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
                <BoxMobile />
            </div>
        </div>
    );
}

export default Intro;