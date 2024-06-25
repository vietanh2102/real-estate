import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { useState } from 'react';

import InputSearch from './Component/InputSearch/InputSearch';
import NavBar from './Component/NavBar/NavBar';
import FilterBox from './Component/FilterBox/FilterBox';
const cx = classNames.bind(styles)
function Header() {
    const condition: boolean[] = [true, false]
    const [active, setActive] = useState(condition)

    return (
        <div className={cx('header')}>
            <NavBar />
            {/* {slice backgeoud} */}
            <div className={cx('backgroud')}>
                <div className={cx("search-box")}>
                    <div className={cx("search-tab")}>
                        <span
                            className={cx("tab", active[0] && "active")}
                            onClick={() => setActive(condition)}
                        >
                            Nhà đất cho thuê
                        </span>
                        <span
                            className={cx("tab", active[1] && "active")}
                            onClick={() => setActive([false, true])}
                        >
                            Nhà đất bán
                        </span>
                    </div>
                    <div className={cx("search-conten")}>
                        <div className={cx("input-box")}>
                            <InputSearch />
                        </div>
                        <FilterBox />
                    </div>
                    <div className={cx('intro')}>
                        <span className={cx('main-intro')}>
                            Tìm kiếm ngôi nhà hoàn hảo cho bạn
                        </span>
                        <span className={cx('sub-intro')}>
                            Khám phá ngôi nhà tốt nhất để thuê hoặc mua, từ căn hộ sang trọng đến nhà ở gia đình rộng rãi
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;