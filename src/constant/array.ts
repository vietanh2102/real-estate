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
    value: string
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
        title: "Mức giá",
        value: "0"
    },
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
export const filterGround: Filter[] = [
    {
        title: "Diện tích",
        value: "0"
    },
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
        value: "TP Hồ Chí Minh"
    },
    {
        title: "Tp Đà Nẵng",
        value: "Tp Đà Nẵng"
    },
    {
        title: "Tp Bình Dương",
        value: "Tp Bình Dương"
    },
    {
        title: "Tp Đà Lạt",
        value: "Tp Đà Lạt"
    }
]