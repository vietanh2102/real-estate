import classNames from "classnames/bind";
import styles from "./CardPostLoading.module.scss"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const cx = classNames.bind(styles)
interface Props {
    isNewPage: boolean
}
function CardPostLoading({ isNewPage }: Props) {
    return (
        <div className={cx("card-wrapper")}>
            <Skeleton className={cx("title", "mobile", isNewPage ? "newsPage" : "")} />
            <div className={cx(!isNewPage ? `card` : "card-news")}>
                <Skeleton className={cx("card-img")} />
                <div className={cx("card-info")}>
                    <Skeleton className={cx("title", "destop", isNewPage ? "titleNew" : "")} />
                    <Skeleton className={cx("card-erea")} />
                    <Skeleton className={cx("card-location")} />
                </div>
            </div>
        </div>
    );
}

export default CardPostLoading;