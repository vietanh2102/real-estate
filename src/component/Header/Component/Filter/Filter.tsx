import classNames from 'classnames/bind'
import styles from "./Filter.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
interface Props {
    title: string
}
const cx = classNames.bind(styles)
function FilterTitle({ title }: Props) {
    return (
        <div className={cx("filter-tab")}>
            <span className={cx("title")}>
                {title}
            </span>
            <span className={cx("icon")}>
                <FontAwesomeIcon icon={faChevronDown} />
            </span>
        </div>
    );
}

export default FilterTitle;