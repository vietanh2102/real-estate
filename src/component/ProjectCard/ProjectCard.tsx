import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Post } from '../../types/PostType';
import user from './../../assets/img/user.png'
import styles from './ProjectCard.module.scss'
import classNames from 'classnames/bind';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const cx = classNames.bind(styles)
interface Props {
    news?: Post
}
function ProjectCard({ news }: Props) {
    return (
        <div className={cx("main-conten")}>
            <div className={cx("conten-img")}>
                <div className={cx("big-img")}>
                    <img src={news?.img[0]} alt='err' />
                </div>
                <div className={cx("small-img")}>
                    <div className={cx("img-parent1")}>
                        <img src={news?.img[1]} alt='err' />
                    </div>
                    <div className={cx("img-parent2")}>
                        <img src={news?.img[2]} alt='err' />
                    </div>
                    <div className={cx("img-parent3")}>
                        <img src={news?.img[3]} alt='err' />
                    </div>
                </div>
            </div>
            <div className={cx("conten-title")}>{news?.title}</div>
            <div className={cx("conten-detail")}>
                <div className={cx("main-detail")}>
                    {news?.type === "bán" &&
                        <span className={cx('price')}>~ {news.detail.price * news.detail.area / 1000} tỷ</span>
                    }
                    <span className={cx("area")}>{news?.detail.area}m²</span>
                    <span className={cx("config-price")}> {news?.detail.price}/m²</span>
                </div>
                <div className={cx("location")}>
                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#E03C31", }} />
                    <span>{news?.location}</span>
                </div>
            </div>
            <div className={cx("info-user")}>
                <div className={cx("contact-avatar")}>
                    <img src={user} alt="err" />
                </div>
                <div className={cx("contact-name")}>
                    <div className={cx("name")}>{news?.owner.name}</div>
                    <a className={cx("time")}>{news?.date}</a>
                </div>
                <div className={cx("contact-phone")}>
                    <Button
                        title={`SĐT: 0${news?.owner.phone}`}
                        blueButton={true}
                        small={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;