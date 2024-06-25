
import { useDispatch } from 'react-redux';
import styles from './SidebarBox.module.scss'
import classNames from 'classnames/bind';
import { setAreaFilter, setLocationFilter, setPriceFilter } from '../../redux/blog.slice';
import { Filter } from '../../constant/array';
import { toTopPage } from '../../hooks/scrollTop';

const cx = classNames.bind(styles)
interface Props {
    title: string,
    list: Filter[],
    darkBox?: boolean,
    typeFilter?: string
}
function SidebarBox({ title, list, darkBox, typeFilter }: Props) {
    const classes = cx("sidebar-box", { darkBox })
    const dispatch = useDispatch()
    const handleClick = (typeFilter: string | undefined, item: Filter) => {
        if (typeFilter === "location") {
            dispatch(setLocationFilter(item.value))
        } else if (typeFilter === "area") {
            dispatch(setAreaFilter(item.value))
        } else if (typeFilter === "price") {
            dispatch(setPriceFilter(item.value))
        }
        toTopPage(0)
    }
    return (
        <div className={classes}>
            <h4 className={cx("box-title")}>{title}</h4>
            <ul className={cx("box-conten")}>
                {list.map((item, index) => (
                    <li
                        onClick={() => handleClick(typeFilter, item)}
                        key={index}
                        className={cx("box-item")}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SidebarBox;