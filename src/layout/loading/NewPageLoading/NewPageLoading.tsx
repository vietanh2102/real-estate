import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import classNames from "classnames/bind";
import styles from "./NewLoading.module.scss"

const cx = classNames.bind(styles)
function NewPageLoading() {
    return (
        <div className={cx('container')}>
            <div className={cx("info-wrapper")}>
                <div className={cx('slice')}>
                    <span className={cx('pr-title')}><Skeleton /></span>
                    <span className={cx('location')}><Skeleton /></span>
                    <div className={cx('thumb-gallery')}>
                        <Skeleton className={cx('swiper-slice1')} />
                        <Skeleton className={cx('swiper-slice2')} />
                    </div>
                </div>
                <div className={cx("sidebar")}>
                    <Skeleton className={cx('sidebar')} />
                </div>
            </div>
            {/* {posts} */}
        </div >
    );
}

export default NewPageLoading;