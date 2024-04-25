
import classNames from 'classnames/bind';

import styles from './Home.module.scss'
import Intro from '../../component/HomeComponent/Intro/Intro';
import LocationPost from '../../component/HomeComponent/LocationPost/LocationPost';
import News from '../../component/HomeComponent/News/News';
import Post from '../../component/HomeComponent/Post/Post';
import Brand from '../../component/HomeComponent/Brand/Brand';
const cx = classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')}>
            <News />
            <LocationPost />
            <Post />
            <Intro />
            <Brand />
        </div>
    );
}

export default Home;