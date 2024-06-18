import { Link } from 'react-router-dom';
import BrokerSlice from '../../component/BrokerSlice/BrokerSlice';
import ProjectCard from '../../component/ProjectCard/ProjectCard';
import SidebarBox from '../../component/SidebarBox/SidebarBox';
import { filterGround, filterPriceRent } from '../../constant/array';
import { useGetPostQuery } from '../../redux/blog.service';
import { Post } from '../../types/PostType';
import styles from './RentRealEstate.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function RentRealEstate() {
    const { data } = useGetPostQuery()
    const news: Post[] | undefined = data?.filter(item => item.type === "thuê")
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                {/* <a>{mua/bán}</a> */}
                {/* <a>BĐS {loction}</a> */}
                <h2 className={cx("content-title")}>Cho thuê nhà đất trên toàn quốc</h2>
                {news?.map(item => (
                    <Link to={`/news/${item.id}`}>
                        <ProjectCard news={item} key={item.id} />
                    </Link>
                ))}
            </div>
            <div className={cx("sidebar")}>
                <SidebarBox title='Lọc theo khoảng giá' list={filterPriceRent} />
                <SidebarBox title='Lọc theo diện tích' list={filterGround} />
                <BrokerSlice />
            </div>
        </div>
    );
}

export default RentRealEstate;