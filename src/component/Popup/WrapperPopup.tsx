import classNames from 'classnames/bind'
import styles from "./WrapperPopup.module.scss"
import { Filter } from '../../constant/array';

const cx = classNames.bind(styles)
interface Props {
    condition: boolean,
    filter: Filter[],
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setShow: React.Dispatch<React.SetStateAction<boolean>>[]
}
function WrapperPopup({ condition, filter, setTitle, setShow }: Props) {
    const [setFilterPrice, setFilterShowGround, setFilterShowLocation] = setShow
    const handleClick = (title: string) => {
        setFilterPrice(false)
        setFilterShowGround(false)
        setFilterShowLocation(false)
        setTitle(title)
    }
    return (
        <div className={cx("wrapper", !condition && "hiden")}>
            <ul>
                {filter.map((item, index) => (
                    <li key={index} onClick={() => handleClick(item.title)}>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WrapperPopup;