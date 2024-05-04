import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import styles from './FilterBox.module.scss'
import classNames from 'classnames/bind'
import FilterTitle from '../FilterItem/FilterItem'
import WrapperPopup from '../../../../../component/Popup/BoxMobile'
import { filterGround, filterLocation, filterTitlePrice } from '../../../../../constant/array'

const cx = classNames.bind(styles)
function FilterBox() {
    const [filterPrice, setFilterPrice] = useState(false)
    const [filterShowGround, setFilterShowGround] = useState(false)
    const [filterShowLoction, setFilterShowLocation] = useState(false)
    const setShow = [setFilterPrice, setFilterShowGround, setFilterShowLocation]
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [ground, setGround] = useState('')
    const handleClickReset = () => {
        setLocation('')
        setPrice('')
        setGround('')
    }
    return (
        <div className={cx("filter")}>
            <div className={cx("filter-box")}>
                <div>
                    <div
                        onClick={() => {
                            setFilterPrice(false),
                                setFilterShowGround(false),
                                setFilterShowLocation(!filterShowLoction)
                        }}
                        className={cx("filter-item")}
                    >
                        <FilterTitle title={location || 'Trên Toàn Quốc'} />
                    </div>

                    <div className={cx("popup")}>
                        <WrapperPopup
                            condition={filterShowLoction}
                            filter={filterLocation}
                            setTitle={setLocation}
                            setShow={setShow}
                        />
                    </div>
                </div>
                <div>
                    <div
                        onClick={() => {
                            setFilterPrice(!filterPrice),
                                setFilterShowGround(false),
                                setFilterShowLocation(false)
                        }}
                        className={cx("filter-item")}
                    >
                        <FilterTitle title={price || 'Mức giá'} />
                    </div>

                    <div className={cx("popup")}>
                        <WrapperPopup
                            condition={filterPrice}
                            filter={filterTitlePrice}
                            setTitle={setPrice}
                            setShow={setShow}
                        />
                    </div>
                </div>
                <div>
                    <div
                        onClick={() => {
                            setFilterShowGround(!filterShowGround),
                                setFilterPrice(false),
                                setFilterShowLocation(false)
                        }}
                        className={cx("filter-item")}
                    >
                        <FilterTitle title={ground || 'Diện tích'} />
                    </div>

                    <div className={cx("popup")}>
                        <WrapperPopup
                            condition={filterShowGround}
                            filter={filterGround}
                            setTitle={setGround}
                            setShow={setShow}
                        />
                    </div>
                </div>
                <div>
                    <FilterTitle title='Lọc thêm' />
                </div>
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