import classNames from "classnames/bind";
import styles from "./BrandIteam.module.scss"
const cx = classNames.bind(styles)
interface Props {
    href: string,
    src: string
}
function BrandItem({ href, src }: Props) {
    return (
        <div className={cx("container")}>
            <div className={cx("swiper-item")}>
                <a href={href}>
                    <img loading="lazy" src={src} alt="err" />
                </a>

            </div>

        </div>
    );
}

export default BrandItem;