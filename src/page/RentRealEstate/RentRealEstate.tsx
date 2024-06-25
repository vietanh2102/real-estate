
import { useDispatch, useSelector } from 'react-redux';
import BrokerSlice from '../../component/BrokerSlice/BrokerSlice';
import ProjectCard from '../../component/ProjectCard/ProjectCard';
import SidebarBox from '../../component/SidebarBox/SidebarBox';
import { filterGround, filterLocation, filterPriceRent } from '../../constant/array';
import { useGetPostQuery } from '../../redux/blog.service';
import { Post } from '../../types/PostType';
import styles from './RentRealEstate.module.scss'
import classNames from 'classnames/bind';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { resetFilter, setTypeFilter } from '../../redux/blog.slice';

const cx = classNames.bind(styles)
function RentRealEstate() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetFilter())
        dispatch(setTypeFilter("thuê"))
    }, [])
    const { data } = useGetPostQuery()
    const optionFilter = useSelector((state: RootState) => state.blog.optionFilter)
    const news: Post[] | undefined = data?.filter(item => item.type === "thuê")
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <span style={{ color: "black" }}>
                    Tất cả BĐS {optionFilter.location ? `tại ${optionFilter.location}` : "Trên toàn quốc "}
                </span>
                <h2 className={cx("content-title")}>
                    Mua bán nhà đất {optionFilter.location ? `tại ${optionFilter.location}` : "Trên toàn quốc"}
                    {(optionFilter.price[1] !== 0 && optionFilter.price[1] < 100) && `, giá từ ${optionFilter.price[0]}tr đến ${optionFilter.price[1]}tr`}

                    {(optionFilter.price[1] !== 0 && optionFilter.price[1] > 100) && `, giá trên ${optionFilter.price[0]}tr`}
                    {optionFilter.area !== 0 && `, diện tích trên ${optionFilter.area}/m²`}
                </h2>
                {news?.map(item => (
                    <ProjectCard news={item} key={item.id} />
                ))}
            </div>
            <div className={cx("sidebar")}>
                <SidebarBox
                    title='Lọc theo địa điểm'
                    list={filterLocation}
                    darkBox={true}
                    typeFilter='location'
                />
                <SidebarBox
                    title='Lọc theo khoảng giá'
                    list={filterPriceRent}
                    typeFilter='price'
                />
                <SidebarBox
                    title='Lọc theo diện tích'
                    list={filterGround}
                    typeFilter='area'
                />
                <BrokerSlice />
            </div>
        </div>
    );
}

export default RentRealEstate;