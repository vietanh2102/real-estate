import classNames from "classnames/bind";
import Footer from "../component/Footer/Footer";
import InputSearch from "../component/Header/Component/InputSearch/InputSearch";
import NavBar from "../component/Header/Component/NavBar/NavBar";
import styles from './NewsLayout.module.scss'
interface Props {
    children: React.JSX.Element
}
const cx = classNames.bind(styles)
function NewLayout({ children }: Props) {
    return (
        <div className={cx('wrapper')}>
            <NavBar />
            <div className={cx('box-seach')}>
                <div className={cx("input-box")}>
                    <InputSearch />
                </div>
            </div>
            {children}
            <Footer />
        </div>
    );
}

export default NewLayout;