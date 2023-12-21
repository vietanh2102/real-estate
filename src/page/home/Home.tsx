import Intro from '../../component/HomeComponent/Intro/Intro';
import LocationPost from '../../component/HomeComponent/LocationPost/LocationPost';
import News from '../../component/HomeComponent/News/News';
import Post from '../../component/HomeComponent/Post/Post';
import styles from './Home.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')}>
            <News />
            <Post />
            <LocationPost />
            <Intro />
        </div>
    );
}

export default Home;