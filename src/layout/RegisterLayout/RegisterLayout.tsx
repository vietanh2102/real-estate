import classNames from "classnames/bind";
import styles from "./ResgiterLayout.module.scss";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/Header/Component/NavBar/NavBar";
import { elip } from "../../assets/img/elip";
interface Props {
  children: React.JSX.Element;
}
const cx = classNames.bind(styles);
function RegisterLayout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div className={cx("container")}>
        <div className={cx("intro")}>
          <div className={cx("intro-mobi")}>
            <div className={cx("backgroundImg")}>
              <img src={elip} alt="erro" />
            </div>
            <div className={cx("img")}>
              <img
                className={cx("logo")}
                src="https://staticfile.batdongsan.com.vn/images/logo/standard/red/logo.svg"
                alt="erro"
              />

              <img
                className={cx("img-main")}
                src="https://batdongsan.com.vn/sellernet/static/media/picture.4ef6e0a1.png"
                alt="erro"
              />
            </div>
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default RegisterLayout;
