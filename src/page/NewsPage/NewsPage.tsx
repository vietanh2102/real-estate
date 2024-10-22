import classNames from "classnames/bind";
import styles from "./NewsPage.module.scss";
import News from "../../component/HomeComponent/News/News";
import BrokerSlice from "../../component/BrokerSlice/BrokerSlice";
import { hotLocation } from "../../constant/array";
import { useGetAllNewsQuery } from "../../redux/blog.service";
import { Link } from "react-router-dom";
import ListLocation from "../../component/ListLocation/ListLocation";
const cx = classNames.bind(styles);
function NewsPage() {
  const { data } = useGetAllNewsQuery();
  return (
    <div className={cx("container")}>
      <div className={cx("intro")}>
        <div className={cx("intro-main")}>
          <p className={cx("title")}>Tin tức bất động sản mới nhất</p>
          <p className={cx("text")}>
            Thông tin mới, đầy đủ, hấp dẫn về thị trường bất động sản Việt Nam
            thông qua dữ liệu lớn về giá, giao dịch, nguồn cung - cầu và khảo
            sát thực tế của đội ngũ phóng viên, biên tập của
            Batdongsan.com.ttvn.
          </p>
        </div>
      </div>
      <News />
      <div className={cx("list")}>
        <div className={cx("list-news")}>
          {data?.map((item) => (
            <Link to={`/new/${item.id}`} key={item.id}>
              <div className={cx("newCard-mobie")}>
                <div className={cx("new-img")}>
                  <img src={item.img} alt="err" />
                </div>
                <div className={cx("new-conten")}>
                  <div className={cx("conten-date")}>21/02/2024</div>
                  <div className={cx("conten-title")}>{item.name}</div>
                  <div className={cx("conten-intro")}>{item.intro}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={cx("sidebar")}>
          <div className={cx("broker")}>
            <BrokerSlice />
          </div>
          <ListLocation />
          <div className={cx("list-location")}>
            <h2>Thị trường BĐS tại 10 tỉnh / thành phố lớn</h2>

            <div className={cx("big-location")}>
              {hotLocation.map((item) => (
                <div className={cx("bigLocation-item")} key={item.id}>
                  <div
                    className={cx("item-img")}
                    style={{ background: `url(${item.img})` }}
                  ></div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
