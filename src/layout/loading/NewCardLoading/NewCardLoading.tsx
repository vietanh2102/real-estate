import classNames from "classnames/bind";
import styles from "./NewCardLoading.module.scss"
import Skeleton from "react-loading-skeleton";

const cx = classNames.bind(styles)
function NewLoading() {
    return (
        <>
            <div className={cx("news-container")}>
                <div className={cx("new-info")}>
                    <div>
                        <Skeleton className={cx("img-pc")} />
                        <Skeleton className={cx("title-pc")} />
                    </div>
                </div>
                <div className={cx("list-news")}>
                    <ul>
                        <li><Skeleton /></li>
                        <li><Skeleton /></li>
                        <li><Skeleton /></li>
                        <li><Skeleton /></li>
                        <li><Skeleton /></li>
                        <li><Skeleton /></li>
                    </ul>
                </div>
            </div>
            <div className={cx("listnews-mobile")}>
                <div className={cx('new__item')}>
                    <Skeleton className={cx("img")} />
                    <Skeleton className={cx("title")} />
                </div>
                <div className={cx('new__item')}>
                    <Skeleton className={cx("img")} />
                    <Skeleton className={cx("title")} />
                </div>
                <div className={cx('new__item')}>
                    <Skeleton className={cx("img")} />
                    <Skeleton className={cx("title")} />
                </div>
                <div className={cx('new__item')}>
                    <Skeleton className={cx("img")} />
                    <Skeleton className={cx("title")} />
                </div>
                <div className={cx('new__item')}>
                    <Skeleton className={cx("img")} />
                    <Skeleton className={cx("title")} />
                </div>
                <div className={cx('new__item')}>
                    <Skeleton className={cx("img")} />
                    <Skeleton className={cx("title")} />
                </div>

            </div>
        </>
    );
}

export default NewLoading;