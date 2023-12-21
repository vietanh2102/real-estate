import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo2.jpg'
const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('navbar')}>
                <div className={cx('container')}>
                    <div className={cx("navbar-logo")}>
                        <img className={cx('logo')} src={logo} alt='erro' />
                        <span>BĐS Bảo Ngọc</span>
                    </div>
                    <div className="navbar-list">
                        <ul className={cx('navbar-menu')}>
                            <li className={cx('navbar-item')}><Link to={'/'}>Trang chủ</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Loại nhà đất</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Dự án</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Tin tức</Link></li>
                            <li className={cx('navbar-item')}><Link to={''}>Liên hệ</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* {slice backgeoud} */}
            <div className={cx('backgroud')}>

            </div>
        </div>
    );
}

export default Header;