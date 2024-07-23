import classNames from "classnames/bind";
import styles from "./CardRealEstateLoading.module.scss"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const cx = classNames.bind(styles)
function CardRealEstateLoading() {
    return (
        <div className={cx("main-conten")}>
            <div className={cx("conten-img")}>
                <div className={cx("big-img")}>
                    <Skeleton className={cx("img")}>
                    </Skeleton>
                </div>
                <div className={cx("small-img")}>
                    <div className={cx("img-parent1")}><Skeleton className={cx("img")}></Skeleton></div>
                    <div className={cx("img-parent2")}><Skeleton className={cx("img")}></Skeleton></div>
                    <div className={cx("img-parent3")}><Skeleton className={cx("img")}></Skeleton></div>
                </div>
            </div>
            <Skeleton className={cx("conten-title")}></Skeleton>
            <Skeleton className={cx("info-user")}>
            </Skeleton>
        </div>
    );
}

export default CardRealEstateLoading;