import classNames from "classnames/bind";
import styles from './Post.module.scss'
import { useGetPostQuery } from "../../../redux/blog.service";
import PostCard from "./PostCard/PostCard";
import { Link } from "react-router-dom";
import CardPostLoading from "../../../layout/loading/CardPostLoading/CardPostLoading";


const cx = classNames.bind(styles)
function Post() {
    const { data, isLoading } = useGetPostQuery()
    let postList
    1023 < window.innerWidth && window.innerWidth < 1247 ? postList = data?.slice(0, 9) : postList = data?.slice(0, 8)
    return (
        <div className={cx("container")}>
            <div className={cx("title")}>
                Bất động sản dành cho bạn
            </div>
            <div className={cx("wrapper")}>
                {isLoading ? <>
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                    <CardPostLoading isNewPage={false} />
                </>

                    : postList?.map(item => (
                        <Link to={`/news/${item.id}`} key={item.id}>
                            <PostCard post={item} isNewPage={false} />
                        </Link>
                    ))
                }
            </div>
            <div className={cx("more")}>
                <button className={cx("btn")}>
                    <a className={cx("btn-tx")}>
                        Xem Thêm
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Post;