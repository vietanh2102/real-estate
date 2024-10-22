import BrokerSlice from "../../component/BrokerSlice/BrokerSlice";
import SidebarBox from "../../component/SidebarBox/SidebarBox";
import {
  filterGround,
  filterLocation,
  filterTitlePrice,
} from "../../constant/array";
import styles from "./SellRealEstate.module.scss";
import classNames from "classnames/bind";
import ProjectCard from "../../component/ProjectCard/ProjectCard";
import { useGetPostQuery } from "../../redux/blog.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { resetFilter, setTypeFilter } from "../../redux/blog.slice";
import CardRealEstateLoading from "../../layout/loading/CardRealEstateLoading/CardRealEstateLoading";

const cx = classNames.bind(styles);
function SellRealEstate() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFilter());
    dispatch(setTypeFilter("bán"));
  }, [dispatch]);
  const { data, isLoading } = useGetPostQuery({ start: 0, type: "bán" });
  const optionFilter = useSelector(
    (state: RootState) => state.blog.optionFilter
  );
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <span>Bán/</span>
        <span style={{ color: "black" }}>
          Tất cả BĐS{" "}
          {optionFilter.location
            ? `tại ${optionFilter.location}`
            : "Trên toàn quốc "}
        </span>
        <h2 className={cx("content-title")}>
          Mua bán nhà đất{" "}
          {optionFilter.location
            ? `tại ${optionFilter.location}`
            : "Trên toàn quốc"}
          {optionFilter.price[1] !== 0 &&
            optionFilter.price[1] < 2 &&
            `, giá dưới ${optionFilter.price[1]} tỉ `}
          {optionFilter.price[1] > 2 &&
            optionFilter.price[1] < 100 &&
            `, giá từ ${optionFilter.price[0]} tỉ đến ${optionFilter.price[1]} tỉ`}
          {optionFilter.price[1] !== 0 &&
            optionFilter.price[1] > 100 &&
            `, giá trên ${optionFilter.price[0]} tỉ`}
          {optionFilter.area !== 0 &&
            `, diện tích trên ${optionFilter.area}/m²`}
        </h2>
        {isLoading ? (
          <>
            <CardRealEstateLoading />
            <CardRealEstateLoading />
            <CardRealEstateLoading />
            <CardRealEstateLoading />
            <CardRealEstateLoading />
          </>
        ) : (
          data?.map((item) => <ProjectCard news={item} key={item.id} />)
        )}
      </div>
      <div className={cx("sidebar")}>
        <SidebarBox
          title="Lọc theo địa điểm"
          list={filterLocation}
          darkBox={true}
          typeFilter="location"
        />
        <SidebarBox
          title="Lọc theo khoảng giá"
          list={filterTitlePrice}
          typeFilter="price"
        />
        <SidebarBox
          title="Lọc theo diện tích"
          list={filterGround}
          typeFilter="area"
        />
        <BrokerSlice />
      </div>
    </div>
  );
}

export default SellRealEstate;
