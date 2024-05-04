import styles from './Button.module.scss'
import classNames from 'classnames/bind';
interface Props {
    src: string
}
const cx = classNames.bind(styles)
function Button({ src }: Props) {
    return (
        <button className={cx("item")}>
            <img src={src} alt="er" />
        </button>
    );
}

export default Button;