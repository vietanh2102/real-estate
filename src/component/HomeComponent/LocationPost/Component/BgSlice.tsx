import { ImgSlice } from "../../../../constant/array";

import classNames from "classnames/bind";
import styles from "./BgSlice.module.scss";
import { useEffect, useState } from "react";

interface Props {
  imgSlice: ImgSlice;
}
const cx = classNames.bind(styles);
function BgSlice({ imgSlice }: Props) {
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    const setImg = setTimeout(() => {
      id < 2 ? setId(id + 1) : setId(0);
    }, 3000);
    return () => clearTimeout(setImg);
  });
  return (
    <div className={cx("place-item")}>
      {imgSlice.bg.map((item, index) => (
        <div key={index}>
          <span className={cx("place-name")}>{imgSlice.location}</span>
          <div className={cx("slice", index === id ? "active" : "")}>
            <img loading="lazy" src={item} alt="err" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BgSlice;
