export interface BrandItem {
    id: number,
    href: string,
    src: string
}
export interface ImgSlice {
    bg: string[],
    location: string
}
export interface TitleNews {
    id: number,
    title: string,
    active: boolean
}
export interface Description {
    id: number,
    img: string,
    title: string,
    description: string
}
export interface Filter {
    title: string,
    value?: number | string
}
export interface DetailEstateType {
    src: string,
    title: string,
    value: string | undefined | number
}
export interface Broker {
    id: number;
    name: string;
    phone: string;
    img: string;
}
export const brandItem: BrandItem[] = [
    {
        id: 0,
        href: "https://batdongsan.com.vn/dau-tu-du-an/cong-ty-co-phan-tap-doan-dia-oc-cat-tuong-ep2045",
        src: "https://file4.batdongsan.com.vn/2022/01/25/20220125113950-181d.jpg"
    },
    {
        id: 1,
        href: "https://batdongsan.com.vn/tu-van-moi-gioi-bat-dong-san/cong-ty-tnhh-tu-van-dich-vu-bat-dong-san-duc-hung-land-ep2971",
        src: "https://file4.batdongsan.com.vn/2022/08/25/20220825105336-1842_wm.jpg"
    },
    {
        id: 2,
        href: "https://batdongsan.com.vn/dau-tu-du-an/cong-ty-co-phan-phat-trien-nam-sai-gon-ep2925",
        src: "https://file4.batdongsan.com.vn/2021/12/28/20211228101112-7abe.jpg"
    },
    {
        id: 3,
        href: "https://batdongsan.com.vn/tu-van-moi-gioi-bat-dong-san/cong-ty-tnhh-thuong-mai-dich-vu-bat-dong-san-sp-home-ep2949",
        src: "https://file4.batdongsan.com.vn/2022/06/27/20220627161209-e035.jpg"
    },
    {
        id: 4,
        href: "https://batdongsan.com.vn/dau-tu-du-an/kim-oanh-group-ep3048",
        src: "https://file4.batdongsan.com.vn/2023/10/13/20231013170445-bb13_wm.jpg"
    },
    {
        id: 5,
        href: "https://batdongsan.com.vn/tu-van-moi-gioi-bat-dong-san/cong-ty-tnhh-moi-gioi-ngoi-nha-xanh-ep2967",
        src: "https://file4.batdongsan.com.vn/2022/08/18/20220818133706-50e7_wm.jpg"
    },
    {
        id: 6,
        href: "https://batdongsan.com.vn/tu-van-moi-gioi-bat-dong-san/cong-ty-tnhh-bat-dong-san-thien-minh-capital-ep2898",
        src: "https://file4.batdongsan.com.vn/2021/10/27/20211027081258-eb6e.jpg"
    },
    {
        id: 7,
        href: "https://batdongsan.com.vn/dau-tu-du-an/cong-ty-tnhh-dau-tu-bat-dong-san-hausland-ep2841",
        src: "https://file4.batdongsan.com.vn/2021/03/15/hmcVYWuR/20210315115758-8278.jpg"
    },
    {
        id: 8,
        href: "https://batdongsan.com.vn/dau-tu-du-an/cong-ty-tnhh-dau-tu-dia-oc-thanh-pho-cityland-ep1898",
        src: "https://file4.batdongsan.com.vn/2020/10/16/hmcVYWuR/20201016153855-fa63.jpg"
    },
    {
        id: 9,
        href: "https://batdongsan.com.vn/tu-van-moi-gioi-bat-dong-san/cong-ty-tnhh-dau-tu-xay-dung-dich-vu-hoang-tho-group-ep2813",
        src: "https://file4.batdongsan.com.vn/2020/09/28/PGsxuI1y/20200928152939-aa13.jpg"
    },
]
export const imgSlice: ImgSlice[] = [
    {
        bg: [
            "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-1.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-2.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/HCM-web-3.jpg",
        ],
        location: "Hồ Chí Minh"
    },
    {
        bg: [
            "https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-1.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-2.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/HN-web-3.jpg"
        ],
        location: "Hà Nội"
    },
    {
        bg: [
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-1.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-2.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DDN-web-3.jpg"
        ],
        location: "Hoài Đức"
    },
    {
        bg: [
            "https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-1.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-3.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/BD-web-2.jpg",
        ],
        location: "Đà Nẵng"
    },
    {
        bg: [
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-1.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-2.jpg",
            "https://file4.batdongsan.com.vn/images/newhome/cities1/DNA-web-3.jpg"
        ],
        location: "Bình Dương"
    }
]
export const titleNews: TitleNews[] = [
    { id: 1, title: "Tin tức nổi bật", active: true },
    { id: 3, title: "BĐS Hà Nội", active: false },
    { id: 4, title: "BĐS Hoài Đức", active: false }
]
export const description: Description[] = [
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
export const filterTitlePrice: Filter[] = [
    {
        title: "Dưới 500tr",
        value: "500000000"
    },
    {
        title: "Dưới 1tỷ",
        value: "1000000000"
    },
    {
        title: "1-2 tỷ",
        value: "1000000000"
    },
    {
        title: "3-5 tỷ",
        value: "3000000000"
    },
    {
        title: "5-10 tỷ",
        value: "5000000000"
    },
    {
        title: "Trên 10 tỷ",
        value: "10000000000"
    },
]
export const filterPriceRent: Filter[] = [
    {
        title: "Thỏa thuận",
        value: "Thỏa thuận"
    },
    {
        title: "Dưới 1 triệu",
        value: 1
    },
    {
        title: "1 - 3 triệu",
        value: 3
    },
    {
        title: "3 - 5 triệu",
        value: 5
    },
    {
        title: "5 - 10 triệu",
        value: 10
    },
    {
        title: "10 - 40 triệu",
        value: 40
    },
    {
        title: "40 - 70 triệu",
        value: 70
    },
    {
        title: "70 - 100 triệu",
        value: 100
    },
    {
        title: "Trên 100 triệu",
        value: 100
    }
]
export const filterGround: Filter[] = [
    {
        title: "Dưới 30 m²",
        value: "30"
    },
    {
        title: "Dưới 50 m²",
        value: "50"
    },
    {
        title: "50-80 m²",
        value: "50"
    },
    {
        title: "80-100 m²",
        value: "80"
    },
    {
        title: "100-150 m²",
        value: "100"
    },
    {
        title: "150-200 m²",
        value: "150"
    },
    {
        title: "Trên 200 m²",
        value: "200"
    }
]
export const filterLocation: Filter[] = [
    {
        title: "Trên Toàn Quốc",
        value: ""
    },
    {
        title: "Hà Nội",
        value: "Hà Nội"
    },
    {
        title: "TP Hồ Chí Minh",
        value: "Hồ Chí Minh"
    },
    {
        title: "Tp Đà Nẵng",
        value: "Đà Nẵng"
    },
    {
        title: "Tp Bình Dương",
        value: "Bình Dương"
    },
    {
        title: "Tp Đà Lạt",
        value: "Đà Lạt"
    }
]
export const filterType: Filter[] = [
    {
        title: 'Tất cả nhà đất',
        value: 'Tất cả nhà đất'
    },
    {
        title: 'Căn hộ mặt đất',
        value: 'Căn hộ mặt đất',
    },
    {
        title: 'Căn hộ chung cư',
        value: 'Căn hộ chung cư',
    }



]
export const broker: Broker[] = [
    {
        id: 0,
        name: "CÔNG TY TNHH BĐS MỸ KIM LAND",
        phone: "0906656667",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2020/10/05/RUFz0fap/20201005164326-3c36.jpg"
    },
    {
        id: 1,
        name: "Công ty TNHH Đầu tư Thịnh Hưng",
        phone: "0968652478",
        img: "https://file1.batdongsan.com.vn/thumb200x200.2259.cong-ty-tnhh-dau-tu-thinh-hung.jpg"
    },
    {
        id: 2,
        name: "Công ty TNHH Thương Mại Kinh doanh Địa Ốc Triết Nhung",
        phone: "0968524789",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2017/11/30/JGcIp0rf/20171130143859-71d7.jpg"
    },
    {
        id: 3,
        name: "Công ty TNHH Tư vấn Đấu giá BĐS Sài Gòn Mới",
        phone: "0968524211",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2018/02/09/JGcIp0rf/20180209163223-9e82.jpg"
    },
    {
        id: 4,
        name: "CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN PAGELAND",
        phone: "0968527866",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2020/10/01/RUFz0fap/20201001152924-a627.jpg"
    },
    {
        id: 5,
        name: "Công ty Cổ phần Dịch vụ Đầu tư Thiên Phúc",
        phone: "0968528888",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2018/06/13/JGcIp0rf/20180613143624-5685.jpg"
    },
    {
        id: 6,
        name: "Công ty cổ phần dịch vụ Địa ốc Hưng Lộc Phát",
        phone: "0968688668",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2015/12/11/eCGLjNi5/20151211100131-4d2d.jpg"
    },
    {
        id: 7,
        name: "Big Saigon Real Estate Consulting Co., Ltd",
        phone: "0968686666",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2017/05/29/eCGLjNi5/20170529150235-38de.jpg"
    },
    {
        id: 8,
        name: "Công ty TNHH Bất động sản Phố An Cư",
        phone: "096862222",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2015/12/08/eCGLjNi5/20151208143004-22a0.jpg"
    },
    {
        id: 9,
        name: "Công ty TNHH Sàn Giao Dịch BĐS Quang Thịnh",
        phone: "0968689999",
        img: "https://file1.batdongsan.com.vn/thumb200x200.2259.cong-ty-tnhh-dau-tu-thinh-hung.jpg"
    },
    {
        id: 10,
        name: "Công ty cổ phần BĐS Hoài Đức",
        phone: "0968685555",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2020/10/01/RUFz0fap/20201001152924-a627.jpg"
    },
    {
        id: 11,
        name: "BĐS Hà Nội",
        phone: "0968689999",
        img: "https://file4.batdongsan.com.vn/resize/200x200/2018/05/17/JGcIp0rf/20180517111204-0c9d.jpg"
    },
]
export const projectList: Filter[] = [
    {
        title: "Vinhomes ocean park"
    },
    {
        title: "Vinhomes smart city"
    },
    {
        title: "Thăng Long Victory"
    },
    {
        title: "Geleximco Lê Trọng Tấn"
    },
    {
        title: "Gemek Tower"
    },
    {
        title: "Khu nhà ở Thiên đườn Bảo Sơn"
    },
    {
        title: "Dự án Nam An Khánh"
    }
]
export const utilsList: Filter[] = [
    {
        title: "Tư vấn phong thủy"
    },
    {
        title: "Dự tính chi phí làm nhà"
    },
    {
        title: "Tính lãi suất"
    },
    {
        title: "Quy trình xây nhà"
    },
    {
        title: "Xem tuổi làm nhà"
    },
]