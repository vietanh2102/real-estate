import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import styles from './FilterBox.module.scss'
import classNames from 'classnames/bind'
import FilterItem from '../../../../../component/FilterItem/FilterItem'
import { filterGround, filterLocation, filterTitlePrice, filterType } from '../../../../../constant/array'

const cx = classNames.bind(styles)
function FilterBox() {
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [area, setArea] = useState('')
    const [type, setType] = useState('')
    const handleClickReset = () => {
        setType('')
        setLocation('')
        setPrice('')
        setArea('')
    }
    return (
        <div className={cx("filter")}>
            <div className={cx("filter-box")}>
                <FilterItem
                    item={filterType}
                    typeFIlter='Loại nhà đất'
                    value={type}
                    setValue={setType}
                />
                <FilterItem
                    item={filterLocation}
                    typeFIlter='Khu vực'
                    value={location}
                    setValue={setLocation}
                />
                <FilterItem
                    item={filterTitlePrice}
                    typeFIlter='Mức giá'
                    value={price}
                    setValue={setPrice}
                />
                <FilterItem
                    item={filterGround}
                    typeFIlter='Diện tích'
                    value={area}
                    setValue={setArea}
                />

            </div>
            <div
                className={cx("reset")}
                onClick={() => handleClickReset()}
            >
                <FontAwesomeIcon icon={faArrowRotateLeft} />
                <span>Đặt lại</span>
            </div>
        </div>
    );
}

export default FilterBox;