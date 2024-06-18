import Footer from "../component/Footer/Footer";
// import InputSearch from "../component/Header/Component/InputSearch/InputSearch";
import NavBar from "../component/Header/Component/NavBar/NavBar";
import styles from './NewsLayout.module.scss'
import { toTopPage } from "../../hooks/scrollTop";

import { useEffect } from "react";
import classNames from "classnames/bind";
// import FilterBox from "../component/Header/Component/FilterBox/FilterBox";
import { useParams } from "react-router-dom";
interface Props {
    children: React.JSX.Element
}
const cx = classNames.bind(styles)
function NewLayout({ children }: Props) {
    const id = useParams()
    useEffect(() => {
        toTopPage(0)
    }, [id])
    return (
        <div className={cx('wrapper')}>
            <NavBar />
            <div className={cx('box-seach')}>
                {/* <div className={cx("input-box")}>
                    <InputSearch />
                </div> */}
                {/* <div className={cx("filter-box")}>
                    <FilterBox />
                </div> */}
            </div>
            <div className={cx("conten")}>{children}</div>
            <Footer />
        </div>
    );
}

export default NewLayout;