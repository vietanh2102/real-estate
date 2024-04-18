import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './LocationPost.module.scss'
import { imgSlice } from '../../../constant/array';
import BgSlice from './Component/BgSlice';
import { IsIntoView } from '../../../hooks/IsIntoView';

const cx = classNames.bind(styles)
function LocationPost() {
    const bigPlaceRef = useRef<HTMLDivElement>(null)
    const smallPlaceRef = useRef<HTMLDivElement>(null)
    const [isViewSmallPlace, setIsViewSmallPlace] = useState(false)
    const [isIntoView, setIsIntoView] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            IsIntoView(bigPlaceRef, setIsIntoView)
            IsIntoView(smallPlaceRef, setIsViewSmallPlace)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div className={cx("container")}>
            <h3 className={cx("title")}>Bất động sản theo địa điểm</h3>
            <div className={cx("place")}>
                <div
                    ref={bigPlaceRef}
                    className={cx("big-place", isIntoView ? 'onView' : '')}
                >
                    <BgSlice imgSlice={imgSlice[0]} />
                </div>
                <div
                    ref={smallPlaceRef}
                    className={cx("small-place", isViewSmallPlace ? 'onView' : '')}
                >
                    <BgSlice imgSlice={imgSlice[1]} />
                    <BgSlice imgSlice={imgSlice[2]} />
                    <BgSlice imgSlice={imgSlice[3]} />
                    <BgSlice imgSlice={imgSlice[4]} />
                </div>
            </div>
        </div >
    );
}

export default LocationPost;