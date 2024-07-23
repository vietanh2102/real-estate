import NewLayout from "../layout/newsLayout/NewLayou"
import Home from "../page/home/Home"
import DetaiPage from "../page/DetailPage/DetailPage"
import RentRealEstate from "../page/RentRealEstate/RentRealEstate"
import SellRealEstate from "../page/SellRealEstate/SellRealEstate"
import NewsPage from "../page/NewsPage/NewsPage"

interface RouteType {
    path: string,
    component: () => React.JSX.Element,
    layout?: any
}
const publicRoutes: RouteType[] = [
    { path: "/", component: Home },
    { path: `/news/:id/*`, component: DetaiPage, layout: NewLayout },
    { path: "/nha-dat-cho-thue", component: RentRealEstate, layout: NewLayout },
    { path: "/nha-dat-ban", component: SellRealEstate, layout: NewLayout },
    { path: "/tin-tuc", component: NewsPage, layout: NewLayout }
]
const privateRoutes: RouteType[] = []
export { publicRoutes, privateRoutes }