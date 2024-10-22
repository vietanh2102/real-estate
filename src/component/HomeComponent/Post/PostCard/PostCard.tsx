import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./PostCard.module.scss";
import { Post } from "../../../../types/PostType";
interface Props {
  post: Post;
  isNewPage: boolean;
}

const cx = classNames.bind(styles);
const PostCard = ({ post, isNewPage }: Props) => {
  return (
    <div className={cx("card-wrapper", `onView`)}>
      <h1 className={cx("title", "mobile", isNewPage ? "newsPage" : "")}>
        {post.title}
      </h1>
      <div className={cx(!isNewPage ? `card` : "card-news")}>
        <div className={cx("card-img")}>
          <img src={post.img[0]} alt="err" />
        </div>
        <div className={cx("card-info")}>
          <div className={cx("title", "destop", isNewPage ? "titleNew" : "")}>
            {post.title}
          </div>
          <div className={cx("card-erea")}>
            {post?.type === "bán" && (
              <span className={cx("price")}>
                ~ {(post.detail.price * post.detail.area) / 1000} tỷ
              </span>
            )}
            <span className={cx("area")}>{post?.detail.area}m²</span>
            <span className={cx("config-price")}>
              {" "}
              {post?.detail.price}tr/m²
            </span>
          </div>
          <div className={cx("card-location")}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{post.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
