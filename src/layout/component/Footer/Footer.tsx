import fb from "./../../../assets/svg/fb.svg"
import twiter from "./../../../assets/svg/twiter.svg"
import youtobe from "./../../../assets/svg/youtobe.svg"
import tiktok from "./../../../assets/svg/tiktok.svg"
import styles from "./Footer.module.scss"
import classNames from "classnames/bind"
import Button from "./component/Button/Button"

const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('intro')}>
                <h1>Website:</h1>
                <span>Batdongsan.com.vn là trang web bất động sản hàng đầu tại Việt Nam - Nơi tốt nhất dành cho những người đang tìm kiếm bất động sản để ở hoặc đầu tư. Chúng tôi cung cấp dữ liệu tin rao lớn với đa dạng loại hình bất động sản giúp bạn có những lựa chọn phù hợp với nhu cầu của mình.</span>
            </div>
            <div className={cx("intro")}>
                <h1>Thông tin liên hệ</h1>
                <span><b>Đia chỉ: </b>Số 8 Nguyễn Thị Định, Thanh Xuân, Hà Nội</span>
                <br /><span><b>Điện Thoại: </b>0968638211</span>
                <br /><span><b>Email: </b>vanh210211@gmail.com</span>

            </div>
            <div className={cx("intro")}>
                <h1>Nhóm liên kết</h1>
                <ul>
                    <li>Tìm kiếm</li>
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách bảo mật</li>
                    <li>Liên hệ</li>
                </ul>
            </div>
            <div className={cx("intro")}>
                <h1>Mạng xã Hội</h1>
                <div className={cx("logo")}>
                    <Button src={fb} />
                    <Button src={twiter} />
                    <Button src={youtobe} />
                    <Button src={tiktok} />
                </div>
            </div>
        </div>
    );
}

export default Footer;