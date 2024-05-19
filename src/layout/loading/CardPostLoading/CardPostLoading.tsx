import classNames from "classnames/bind";
import styles from "./CardPostLoading.module.scss"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const cx = classNames.bind(styles)
function CardPostLoading() {
    return (
        <div className={cx("card-wrapper")}>
            <Skeleton className={cx("title", "mobile")} />
            <div className={cx(`card`)}>
                <Skeleton className={cx("card-img")} />
                <div className={cx("card-info")}>
                    <Skeleton className={cx("title", "destop")} />
                    <Skeleton className={cx("card-erea")}>
                    </Skeleton>
                    <Skeleton className={cx("card-location")}>
                    </Skeleton>
                </div>
            </div>
        </div>
    );
}

export default CardPostLoading;