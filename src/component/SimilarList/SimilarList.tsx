import { Swiper, SwiperSlide } from "swiper/react";
import { useGetPostQuery } from "../../redux/blog.service";
import styles from "./SimilarList.module.scss"
import classNames from "classnames/bind";
import { Navigation } from "swiper/modules";
import PostCard from "../HomeComponent/Post/PostCard/PostCard";
import { CSSProperties } from "react";

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
                            <PostCard post={item} isNewPage={true} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default SimilarList;