
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'
import InputSearch from '../InputSearch/InputSearch';


const cx = classNames.bind(styles)
function NavBar() {
    const [showMenu, setShowMenu] = useState(false)
    //block scroll when open menu
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
    }, [showMenu]);
    return (
        <div className={cx('navbar')}>
            <div className={cx('container')}>
                {/* {logo} */}
                <div className={cx("navbar-logo")}>
                    <img className={cx('logo')} src='https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg' alt='erro' />
                </div>
                {/* {navbar} */}
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
                        <div className={cx("input-box")}>
                            <InputSearch />
                        </div>
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
    );
}

export default NavBar;