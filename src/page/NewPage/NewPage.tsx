import classNames from "classnames/bind";
import styles from "./NewPage.module.scss";
import { useEffect, useState } from "react";
import { New } from "../../types/PostType";
import { Link, useParams } from "react-router-dom";
import BrokerSlice from "../../component/BrokerSlice/BrokerSlice";
import ListLocation from "../../component/ListLocation/ListLocation";
import SimilarList from "../../component/SimilarList/SimilarList";
import { useGetNewsQuery } from "../../redux/blog.service";
import NewPageLoading from "../../layout/loading/NewPageLoading/NewPageLoading";
const cx = classNames.bind(styles);
function NewPage() {
  const { id } = useParams();
  const [newPost, setNewPost] = useState<New>();
  const [loading, setLoading] = useState(false);
  const { data } = useGetNewsQuery("hnNew");
  const hotNews = data?.slice(0, 5);
  useEffect(() => {
    const getNew = async () => {
      setLoading(true);
      const res = await fetch(`https://r2c5kp-8080.csb.app/news/${id}`);
      const data = await res.json();
      setNewPost(data);
      setLoading(false);
    };
    getNew();
  }, [id]);
  return loading ? (
    <NewPageLoading />
  ) : (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <span>{newPost?.name}</span>
      </div>
      <div className={cx("intro")}>
        <strong>{newPost?.intro}</strong>
      </div>
      <div className={cx("conten")}>
        {newPost && (
          <div
            className={cx("conten-main")}
            dangerouslySetInnerHTML={{ __html: newPost.conten.main }}
          />
        )}
        <div className={cx("sidebar")}>
          <ListLocation />
          <div className={cx("hot-news")}>
            <h2>Tin tức nổi bật</h2>
            {hotNews?.map((item, index) => (
              <Link to={`/new/${item.id}`} key={item.id}>
                <div className={cx("new-item")}>
                  <div className={cx("item-number")}>
                    <span>{index + 1}</span>
                  </div>
                  <div className={cx("item-title")}>
                    <span>{item.name}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <BrokerSlice />
        </div>
      </div>
      <div className={cx("hot-location")}>
        <ListLocation />
      </div>
      <SimilarList location="HCM" />
    </div>
  );
}

export default NewPage;
