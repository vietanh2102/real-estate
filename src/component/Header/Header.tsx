import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo2.jpg'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowRotateLeft,
    faBars,
    faChevronDown,
    faHeart,
    faMagnifyingGlass,
    faXmark
}
    from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)
function Header() {
    const condition: boolean[] = [true, false]
    const [active, setActive] = useState(condition)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className={cx('header')}>
            <div className={cx('navbar')}>
                <div className={cx('container')}>
                    {/* {logo} */}
                    <div className={cx("navbar-logo")}>
                        <img className={cx('logo')} src={logo} alt='erro' />
                        <span>BĐS Bảo Ngọc</span>
                    </div>
                    <div className={cx("navbar-list")}>
                        <ul className={cx('navbar-menu')}>
                            <li className={cx('navbar-item')}><Link to={'/'}>Trang chủ</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Loại nhà đất</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Dự án</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Tin tức</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Liên hệ</Link></li>
                        </ul>
                    </div>
                    {/* {responsive} */}
                    <div className={cx("menu")}>
                        <div className={cx("menu-icon")}>
                            <span className={cx("heart-icon")}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span
                                className={cx("bar-icon")}
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                {showMenu ? <FontAwesomeIcon icon={faXmark} style={{ width: 28 }} />
                                    : <FontAwesomeIcon icon={faBars} style={{ width: 28 }} />}
                            </span>
                        </div>
                        <div className={cx("menu-list", showMenu && "show")}>
                            <ul className={cx('navbar-menu')}>
                                <li
                                    className={cx('navbar-item')}
                                    onClick={() => setShowMenu(false)}

                                >
                                    <Link to={'/'}>
                                        <img src='https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/home.svg' alt='err' />
                                        <span className={cx("text")}>Trang chủ</span>
                                    </Link>
                                </li>
                                <li
                                    className={cx('navbar-item')}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <Link to={'/'}>
                                        <img src='https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/all.svg' alt='err' />
                                        <span className={cx("text")}>Loại nhà đất</span>
                                    </Link>
                                </li>
                                <li
                                    className={cx('navbar-item')}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <Link to={'/'}>
                                        <img src='https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/apartment.svg' alt='err' />
                                        <span className={cx("text")}>Dự án</span>
                                    </Link>
                                </li>
                                <li
                                    className={cx('navbar-item')}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <Link to={'/'}>
                                        <img src='https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/news.svg' alt='err' />
                                        <span className={cx("text")}>Tin tức</span>
                                    </Link>
                                </li>
                                <li
                                    className={cx('navbar-item')}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <Link to={'/'}>
                                        <img src='https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/notebook.svg' alt='err' />
                                        <span className={cx("text")}>Liên hệ</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
                            <div className={cx("search-input")}>
                                <input />
                                <button>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <span>Tìm kiếm</span>
                                </button>
                            </div>
                        </div>
                        <div className={cx("filter")}>
                            <div className={cx("filter-box")}>
                                <div className={cx("filter-tab")}>
                                    <span className={cx("title")}>
                                        Trên toàn quốc
                                    </span>
                                    <span className={cx("icon")}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                                <div className={cx("filter-tab")}>
                                    <span className={cx("title")}>
                                        Mức giá
                                    </span>
                                    <span className={cx("icon")}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                                <div className={cx("filter-tab")}>
                                    <span className={cx("title")}>
                                        Diện tích
                                    </span>
                                    <span className={cx("icon")}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                                <div className={cx("filter-tab")}>
                                    <span className={cx("title")}>
                                        Lọc thêm
                                    </span>
                                    <span className={cx("icon")}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                </div>
                            </div>
                            <div className={cx("reset")}>
                                <FontAwesomeIcon icon={faArrowRotateLeft} />
                                <span>Đặt lại</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;