import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import classNames from "classnames/bind";
import styles from './PostCard.module.scss'
import { Post } from "../../../../types/PostType";
interface ChildComponentProps {
    posts: Post,
}

const cx = classNames.bind(styles)
const PostCard: React.FC<ChildComponentProps> = (props) => {
    const post = props.posts
    return (
        <div className={cx("card")}>
            <div className={cx("card-img")}>
                <img src={post.img[0]} alt="err" />
            </div>
            <div className={cx("card-info")}>
                <h1>
                    {/* {post.title.length < 80 ? post.title : post.title.slice(0, 75).padEnd(79, "...")} */}
                    {post.title}
                </h1>
                <div className={cx("card-location")}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{post.location}</span>
                </div>
            </div>
        </div>
    );
}
export default PostCard;