import BrokerSlice from '../../component/BrokerSlice/BrokerSlice';
import SidebarBox from '../../component/SidebarBox/SidebarBox';
import { filterGround, filterLocation, filterTitlePrice } from '../../constant/array';
import styles from './SellRealEstate.module.scss'
import classNames from 'classnames/bind';
import { Post } from '../../types/PostType';
import ProjectCard from '../../component/ProjectCard/ProjectCard';
import { useGetPostQuery } from '../../redux/blog.service';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)
function SellRealEstate() {
    const { data } = useGetPostQuery()
    const news: Post[] | undefined = data?.filter(item => item.type === "bán")
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <span>Bán/</span>
                <span style={{ color: "black" }}>Tất cả BĐS trên toàn quốc</span>
                <h2 className={cx("content-title")}>Mua bán nhà đất trên toàn quốc</h2>
                {news?.map(item => (
                    <Link to={`/news/${item.id}`}>
                        <ProjectCard news={item} key={item.id} />
                    </Link>
                ))}
            </div>
            <div className={cx("sidebar")}>
                <SidebarBox title='Lọc theo khoảng giá' list={filterTitlePrice} />
                <SidebarBox title='Lọc theo diện tích' list={filterGround} />
                <SidebarBox title='Lọc theo địa điểm' list={filterLocation} darkBox={true} />
                <BrokerSlice />
            </div>
        </div>
    );
}

export default SellRealEstate;