import classNames from 'classnames/bind';


import styles from './News.module.scss'
import baner1 from './../../../assets/img/baner1.png'
import baner2 from './../../../assets/img/baner2.gif'
import { useState } from 'react';
import ListNew from './Component/ListNew/ListNew';

const cx = classNames.bind(styles)
function News() {
    const itemInit = [
        { id: 1, title: "Tin tức nổi bật", active: true },
        { id: 3, title: "BĐS Hà Nội", active: false },
        { id: 4, title: "BĐS Hoài Đức", active: false }
    ]
    const [item, setItem] = useState(itemInit)
    const [newTitle, setNewTitle] = useState(itemInit[0].title)
    const active = (id: number, title: string) => {
        const updateActive = itemInit.map(item => (
            item.id === id ? { ...item, active: true } : { ...item, active: false }
        ))
        setItem(updateActive)
        setNewTitle(title)
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('homenews')}>
                    <div className={cx("homenews-container")}>
                        <div className={cx('hometabs')}>
                            {item.map(item => {
                                return (
                                    <h1
                                        key={item.id}
                                        className={cx('hometabs-item', item.active ? 'active' : '')}
                                        onClick={() => active(item.id, item.title)}
                                    >
                                        {item.title}
                                    </h1>
                                )
                            })}
                        </div>
                    </div>
                    <div className={cx('news')}>
                        <ListNew newTitle={newTitle} />
                        {/* {Response} */}
                    </div>
                </div>
                <div className={cx("banner")}>
                    <img src={baner1} alt="err" />
                    <img src={baner2} alt="err" />
                </div>
            </div>
        </div >
    );
}

export default News;