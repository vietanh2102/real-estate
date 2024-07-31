import classNames from "classnames/bind";
import styles from "./NewPageLoading.module.scss"
import Skeleton from "react-loading-skeleton";

const cx = classNames.bind(styles)
function NewPageLoading() {
    return (
        <div className={cx("wrapper")}>
            <Skeleton className={cx("title")} />
            <Skeleton className={cx("intro")} />
            <div className={cx("conten")}>
                <div className={cx("conten-main")}>
                    <Skeleton className={cx("h3")} />
                    <Skeleton className={cx("p")} />
                    <Skeleton className={cx("p")} />
                    <Skeleton className={cx("h3")} />
                    <Skeleton className={cx("p")} />
                    <Skeleton className={cx("p")} />
                </div>
                <div className={cx("sidebar")}>
                    <div >
                        <Skeleton className={cx("hot-location")} />
                    </div>
                    <div >
                        <Skeleton className={cx("hot-news")} />
                    </div>
                    <div >
                        <Skeleton className={cx("broker")} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NewPageLoading
