import classNames from "classnames/bind";
import styles from "./ResgiterPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import passwordIcon from "./../../assets/svg/passwordIcon.svg";
import Button from "../../component/Button/Button";

const cx = classNames.bind(styles);
function RegisterPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("aside")}>
          <img
            className={cx("logo")}
            src="https://batdongsan.com.vn/sellernet/static/media/header-logo-sisu.4b76e0ce.svg"
            alt="erro"
          />
          <div>
            <img
              src="https://batdongsan.com.vn/sellernet/static/media/cover.800e56db.png"
              alt="erro"
            />
          </div>
          <h5>Tìm nhà đất</h5>
          <h5>Batdongsan.com.vn dẫn lối</h5>
        </div>
        <div className={cx("resgiter")}>
          <h5>Xin chào bạn</h5>
          <h3>Đăng nhập để tiếp tục </h3>
          <div className={cx("resgiter-form")}>
            <form>
              <div className={cx("input-item")}>
                <input className={cx("input")} placeholder="Email" />
                <div className={cx("contact-icon")}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
              <div className={cx("err-mess")}></div>
              <div className={cx("input-item")}>
                <input className={cx("input")} placeholder="Password" />
                <span className={cx("contact-icon")}>
                  <img src={passwordIcon} alt="err" />
                </span>
              </div>
              <div className={cx("err-mess")}></div>
              <div className={cx("input-item")}>
                <input className={cx("input")} placeholder="Comfirm Password" />
                <span className={cx("contact-icon")}>
                  <img src={passwordIcon} alt="err" />
                </span>
              </div>
              <div className={cx("err-mess")}></div>
            </form>
            <Button title="Đăng kí" redButton />
            <div className={cx("note")}>
              <span>Bằng việc tiếp tục, bạn đồng ý với </span>
              <span className={cx("text-red")}>
                Điều khoản sử dụng , Chính sách bảo mật , Quy chế , Chính sách{" "}
              </span>
              <span>của chúng tôi.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
