import classNames from "classnames/bind";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import styles from "./ListNews.module.scss";
import { useGetNewsQuery } from "../../../../../redux/blog.service";
import NewLoading from "../../../../../layout/loading/NewCardLoading/NewCardLoading";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
interface Props {
  type: string;
}
function ListNew({ type }: Props) {
  const { data, isLoading } = useGetNewsQuery(type);
  return isLoading ? (
    <NewLoading />
  ) : (
    <>
      <div className={cx("news-container")}>
        <div className={cx("new-info")}>
          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {data?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Link to={`/new/${item.id}`}>
                    <div>
                      <img loading="lazy" src={item.img} alt="err" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={cx("list-news")}>
          <ul>
            {data?.map((item) => (
              <Link to={`/new/${item.id}`} key={item.id}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx("listnews-mobile")}>
        {data?.map((item) => (
          <div key={item.id} className={cx("new__item")}>
            <img src={item.img} alt="err" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListNew;
