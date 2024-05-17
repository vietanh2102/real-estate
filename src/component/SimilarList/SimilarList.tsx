import { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useGetPostQuery } from "../../redux/blog.service";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SimilarList.module.scss"
import PostCard from "../HomeComponent/Post/PostCard/PostCard";
import { toTopPage } from "../../hooks/scrollTop";

const cx = classNames.bind(styles)
interface Props {
    location: string | undefined
}
function SimilarList({ location }: Props) {
    const { data } = useGetPostQuery()
    const listPost = data?.filter(item => item.location === location)
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("title")}>Bất động sản dành cho bạn</h1>
            <div className={cx("list")}>
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1.5, },
                        640: { slidesPerView: 2.5, },
                        768: { slidesPerView: 3, },
                        1024: { slidesPerView: 4, },
                    }}
                    style={{
                        "--swiper-navigation-size": 32,
                        "--swiper-navigation-color": "black"
                    } as CSSProperties}
                    spaceBetween={32}
                    navigation={true}
                    modules={[Navigation]}
                    className={cx("mySwiper")}>
                    {listPost?.map(item => (
                        <SwiperSlide key={item.id}>
                            <Link to={`/news/${item.id}`} onClick={() => toTopPage()}>
                                <PostCard post={item} isNewPage={true} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default SimilarList;