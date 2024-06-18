import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import classNames from "classnames/bind";
import styles from './PostCard.module.scss'
import { Post } from "../../../../types/PostType";
import { useEffect, useRef, useState } from 'react';
import { IsIntoView } from '../../../../hooks/IsIntoView';
interface Props {
    post: Post,
    isNewPage: boolean,
}

const cx = classNames.bind(styles)
const PostCard = ({ post, isNewPage, }: Props) => {
    const sceenWidth = window.innerWidth
    let delay
    if (sceenWidth > 1247) { delay = post.id % 4 }
    else if (sceenWidth > 1023) { delay = post.id % 3 }
    else if (sceenWidth > 767) { delay = post.id % 2 }
    else { delay = 0 }

    const ref = useRef<HTMLDivElement>(null)
    const [isView, setIsView] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            IsIntoView(ref, setIsView)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div className={cx("card-wrapper", isView ? `onView` : "", `delay-${delay}`)}>
            <h1 className={cx("title", "mobile", isNewPage ? "newsPage" : "")}>
                {post.title}
            </h1>
            <div
                ref={ref}
                className={cx(!isNewPage ? `card` : "card-news")}
            >
                <div className={cx("card-img")}>
                    <img src={post.img[0]} alt="err" />
                </div>
                <div className={cx("card-info")}>
                    <div className={cx("title", "destop", isNewPage ? "titleNew" : "")}>
                        {post.title}
                    </div>
                    <div className={cx("card-erea")}>
                        {post?.type === "bán" &&
                            <span className={cx('price')}>~ {post.detail.price * post.detail.area / 1000} tỷ</span>
                        }
                        <span className={cx("area")}>{post?.detail.area}m²</span>
                        <span className={cx("config-price")}> {post?.detail.price}tr/m²</span>
                    </div>
                    <div className={cx("card-location")}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{post.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostCard;