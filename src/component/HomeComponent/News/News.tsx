import classNames from "classnames/bind";

import styles from "./News.module.scss";
import baner1 from "./../../../assets/img/baner1.png";
import baner2 from "./../../../assets/img/baner2.gif";
import { useState } from "react";
import ListNew from "./Component/ListNew/ListNew";
import { titleNews } from "../../../constant/array";

const cx = classNames.bind(styles);
function News() {
  const [item, setItem] = useState(titleNews);
  const [type, setType] = useState("highlightNews");
  const active = (id: number, type: string) => {
    const updateActive = titleNews.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setItem(updateActive);
    setType(type);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("homenews")}>
          <div className={cx("homenews-container")}>
            <div className={cx("hometabs")}>
              {item.map((item) => {
                return (
                  <h1
                    key={item.id}
                    className={cx("hometabs-item", item.active ? "active" : "")}
                    onClick={() => active(item.id, item.value)}
                  >
                    {item.title}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className={cx("news")}>
            <ListNew type={type} />
            {/* {Response} */}
          </div>
        </div>
        <div className={cx("banner")}>
          <img src={baner1} alt="err" />
          <img src={baner2} alt="err" />
        </div>
      </div>
    </div>
  );
}

export default News;
