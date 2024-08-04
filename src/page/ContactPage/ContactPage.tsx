import classNames from "classnames/bind";
import styles from "./ContactPage.module.scss";
import Intro from "../../component/HomeComponent/Intro/Intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser, faEnvelope, faMessage } from "@fortawesome/free-regular-svg-icons";
import Button from "../../component/Button/Button";


const cx = classNames.bind(styles)
function ContactPage() {
    return (
        <div className={cx("container")}>
            <div className={cx("information")}>
                <span className={cx("title")}>Thông tin liên hệ</span>
                <div className={cx("infor-wrapper")}>
                    <div className={cx("infor-item")}>
                        <div className={cx("item-icon")}>
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </span>
                        </div>
                        <div className={cx("item-title")}>
                            <h6>Địa chỉ</h6>
                            <p>An Khánh, Hoài Đức, Hà Nội.</p>
                            <p>666 Nguyễn Thị Định, Thanh Xuân, Hà Nội.</p>
                        </div>
                    </div>
                    <div className={cx("infor-item")}>
                        <div className={cx("item-icon")}>
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                        </div>
                        <div className={cx("item-title")}>
                            <h6>Số Điện Thoại</h6>
                            <p>+84 968 638 211</p>
                            <p>+84 968 666 888</p>
                        </div>
                    </div>
                    <div className={cx("infor-item")}>
                        <div className={cx("item-icon")}>
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                        <div className={cx("item-title")}>
                            <h6>Email</h6>
                            <p>vanh210211@gmail.com</p>
                            <p>anhhv2102@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("contact")}>
                <div className={cx("contact-main")}>
                    <p className={cx("contact-title")}>Nếu bạn có bất kì câu hỏi nào, xin vui lòng liên hệ với chúng tôi</p>
                    <form>
                        <div className={cx("input-item")}>
                            <input
                                className={cx("input")}
                                placeholder="Họ Tên"
                            />
                            <span className={cx("contact-icon")}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                        </div>
                        <div className={cx("input-item")}>
                            <input
                                className={cx("input")}
                                placeholder="Email"
                            />
                            <span className={cx("contact-icon")}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                        <div className={cx("input-item")}>
                            <input
                                className={cx("input")}
                                placeholder="SĐT"
                            />
                            <span className={cx("contact-icon")}>
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                        </div>
                        <div className={cx("text")}>
                            <textarea placeholder="Bạn có muốn nhắn thêm gì không?" />
                            <span className={cx("contact-icon")}>
                                <FontAwesomeIcon icon={faMessage} />
                            </span>
                        </div>
                    </form>
                    <div className={cx("button")}>
                        <Button title="Gửi" blueButton />
                    </div>
                </div>
            </div>
            <Intro />
        </div>
    );
}

export default ContactPage;