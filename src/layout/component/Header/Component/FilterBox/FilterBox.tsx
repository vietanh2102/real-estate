import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

import styles from './FilterBox.module.scss'
import classNames from 'classnames/bind'
import { Filter, filterGround, filterLocation, filterTitlePrice, filterType } from '../../../../../constant/array'
interface Props {
    isNewPage?: boolean,
    // showFilter:{
    //     type: boolean;
    //     location: boolean;
    //     price: boolean;
    //     area: boolean;
    // },
    // setShowFilter:React.Dispatch<React.SetStateAction<{
    //     type: boolean;
    //     location: boolean;
    //     price: boolean;
    //     area: boolean;
    // }>>

}
const cx = classNames.bind(styles)
function FilterBox({ isNewPage }: Props) {
    //filter Title
    const [typeTitle, setTypeTitle] = useState('Loại nhà đất')
    const [locationTitle, setlocationTitle] = useState('Khu vực')
    const [priceTitle, setPriceTitle] = useState('Mức giá')
    const [areaTitle, setAreaTitle] = useState('Diện tích')
    //condition show filter list
    const initShowFilter = {
        type: false,
        location: false,
        price: false,
        area: false
    }
    const [showFilter, setShowFilter] = useState(initShowFilter)
    //reset filter
    const handleClickReset = () => {
        setTypeTitle('Loại nhà đất')
        setlocationTitle('Khu vực')
        setPriceTitle('Mức giá')
        setAreaTitle('Diện tích')
    }
    //click item list filter
    const handleClickListItem = (setTitle: React.Dispatch<React.SetStateAction<string>>, item: Filter) => {
        setShowFilter(initShowFilter)
        setTitle(item.title)
    }
    //check is show list filter
    const isShowOverlay = showFilter.area || showFilter.location || showFilter.price || showFilter.type
    //block scroll but not hidden scrollbar
    useEffect(() => {
        if (isShowOverlay) {
            document.body.classList.add("noscroll")
        } else {
            document.body.classList.remove("noscroll")
        }
    }, [isShowOverlay]);
    return (
        <>
            <div
                onClick={() => setShowFilter(initShowFilter)}
                className={cx("overlay", isShowOverlay && "active")}>
            </div>
            <div className={cx("filter", isNewPage && "filter-newpage")}>
                <div className={cx("filter-box", isNewPage && "box-newpage")}>
                    {/* {filter type} */}
                    <div
                        className={cx("filter-item", isNewPage && "item-newpage")}
                    >
                        <div
                            onClick={() => setShowFilter({ ...initShowFilter, type: !showFilter.type })}
                            className={cx("filter-title")}
                        >
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                            <span className={cx('title')}>{typeTitle}</span>
                        </div>
                        <div className={cx("filter-list", showFilter.type ? "active" : "")}>
                            <ul>
                                {filterType.map((item, index) => (
                                    <li
                                        onClick={() => handleClickListItem(setTypeTitle, item)}
                                        key={index}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* {filter loaction} */}
                    <div className={cx("filter-item", isNewPage && "item-newpage")}>
                        <div
                            onClick={() => setShowFilter({ ...initShowFilter, location: !showFilter.location })}
                            className={cx("filter-title")}
                        >
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                            <span className={cx('title')}>{locationTitle}</span>
                        </div>
                        <div className={cx("filter-list", showFilter.location ? "active" : "")}>
                            <ul>
                                {filterLocation.map((item, index) => (
                                    <li
                                        onClick={() => handleClickListItem(setlocationTitle, item)}
                                        key={index}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* {filter price} */}
                    <div className={cx("filter-item", isNewPage && "item-newpage")}>
                        <div
                            onClick={() => setShowFilter({ ...initShowFilter, price: !showFilter.price })}
                            className={cx("filter-title")}
                        >
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                            <span className={cx('title')}>{priceTitle}</span>
                        </div>
                        <div className={cx("filter-list", showFilter.price ? "active" : "")}>
                            <ul>
                                {filterTitlePrice.map((item, index) => (
                                    <li
                                        onClick={() => handleClickListItem(setPriceTitle, item)}
                                        key={index}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* {filter area} */}
                    <div className={cx("filter-item", isNewPage && "item-newpage")}>
                        <div
                            onClick={() => setShowFilter({ ...initShowFilter, area: !showFilter.area })}
                            className={cx("filter-title")}
                        >
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                            <span className={cx('title')}>{areaTitle}</span>
                        </div>
                        <div className={cx("filter-list", showFilter.area ? "active" : "")}>
                            <ul>
                                {filterGround.map((item, index) => (
                                    <li
                                        onClick={() => handleClickListItem(setAreaTitle, item)}
                                        key={index}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={cx("reset", isNewPage && "reset-newpage")}
                    onClick={() => handleClickReset()}
                >
                    <FontAwesomeIcon icon={faArrowRotateLeft} />
                    <span>Đặt lại</span>
                </div>
            </div>
        </>
    );
}

export default FilterBox;