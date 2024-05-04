import classNames from 'classnames/bind';
import styles from './DetailEstate.module.scss'
import { DetailEstateType } from '../../../constant/array';

const cx = classNames.bind(styles)
function DetailEstate({ src, title, value }: DetailEstateType) {
    return (
        <div className={cx('item')}>
            <span className={cx('icon')}>
                <img src={src} alt='err' />
            </span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('value')}>{value}</span>
        </div>
    );
}

export default DetailEstate;