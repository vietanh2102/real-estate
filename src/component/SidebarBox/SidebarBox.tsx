import { Filter } from '../../constant/array';
import styles from './SidebarBox.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
interface Props {
    title: string,
    list: Filter[],
    darkBox?: boolean
}
function SidebarBox({ title, list, darkBox }: Props) {
    const classes = cx("sidebar-box", { darkBox })
    return (
        <div className={classes}>
            <h4 className={cx("box-title")}>{title}</h4>
            <ul className={cx("box-conten")}>
                {list.map((item, index) => (
                    <li key={index} className={cx("box-item")}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarBox;