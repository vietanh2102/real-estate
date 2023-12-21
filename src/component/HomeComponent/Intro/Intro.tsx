import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/bundle";
import { Pagination, Navigation, A11y } from 'swiper/modules';

import styles from './Intro.module.scss'
const cx = classNames.bind(styles)
interface Description {
    id: number,
    img: string,
    title: string,
    description: string
}
function Intro() {
    const description: Description[] = [
        {
            id: 0,
            img: 'https://staticfile.batdongsan.com.vn/images/box-link-footer/ForSale.svg',
            title: 'Bất động sản bán',
            description: 'Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao lớn, uy tín về các loại hình bất động sản bán tại Việt Nam, bao gồm bán nhà riêng, bán nhà mặt tiền, bán căn hộ chung cư, bán biệt thự, bán đất, bán shophouse và các loại hình BĐS khác.'
        },
        {
            id: 1,
            img: 'https://staticfile.batdongsan.com.vn/images/box-link-footer/ForRent.svg',
            title: 'Bất động sản cho thuê',
            description: 'Cập nhật thường xuyên và đầy đủ các loại hình bất động sản cho thuê như: thuê phòng trọ, nhà riêng, thuê biệt thự, văn phòng, kho xưởng hay thuê mặt bằng kinh doanh giúp bạn nhanh chóng tìm được bất động sản ưng ý.'
        },
        {
            id: 2,
            img: 'https://staticfile.batdongsan.com.vn/images/box-link-footer/Projects.svg',
            title: 'Đánh giá dự án',
            description: 'Các video đánh giá tổng quan dự án cung cấp góc nhìn khách quan của các chuyên gia về những dự án nổi bật tại Việt Nam, giúp bạn đưa ra quyết định đúng đắn cho nơi an cư lý tưởng hoặc cơ hội đầu tư sinh lời.'
        },
        {
            id: 3,
            img: 'https://staticfile.batdongsan.com.vn/images/box-link-footer/Wiki.svg',
            title: 'Wiki BĐS',
            description: 'Ngoài cập nhật những biến động thị trường, chúng tôi còn cung cấp kiến ​​thức, kinh nghiệm về mua bán, cho thuê, đầu tư, vay mua nhà, phong thủy, thiết kế nhà, mọi thông tin cần thiết để dẫn lối người tìm nhà tìm thấy căn nhà mơ ước.'
        }
    ]
    return (
        <div className={cx("intro")}>
            <div className={cx("box")}>
                <div className={cx('box-pc')}>
                    {description.map(item => {
                        return (
                            <div className={cx("box-item")} key={item.id}>
                                <div className={cx("item-img")}>
                                    <img src={item.img} alt='erro' />
                                </div>
                                <div className={cx("item-title")}>
                                    {item.title}
                                </div>
                                <div className={cx("item-description")}>
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cx('box-mobile')}>
                    <Swiper
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination, Navigation, A11y]}
                        className={cx("mySwiper")}
                    >
                        {description.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className={cx("box-item")} key={item.id}>
                                    <div className={cx("item-img")}>
                                        <img src={item.img} alt='erro' />
                                    </div>
                                    <div className={cx("item-title")}>
                                        {item.title}
                                    </div>
                                    <div className={cx("item-description")}>
                                        {item.description}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Intro;