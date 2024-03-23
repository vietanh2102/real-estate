import classNames from "classnames/bind";
import styles from "./Brand.module.scss"

interface Props {
    href: string,
    src: string
}
const cx = classNames.bind(styles)
function Brand({ href, src }: Props) {
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

export default Brand;