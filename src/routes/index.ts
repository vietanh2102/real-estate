import NewLayout from "../layout/newsLayout/NewLayou"
import Home from "../page/home/Home"
import DetaiPage from "../page/DetailPage/DetailPage"
import RentRealEstate from "../page/RentRealEstate/RentRealEstate"
import SellRealEstate from "../page/SellRealEstate/SellRealEstate"
import NewsPage from "../page/NewsPage/NewsPage"
import NewPage from "../page/NewPage/NewPage"
import ContactPage from "../page/ContactPage/ContactPage"

interface RouteType {
    path: string,
    component: () => React.JSX.Element,
    layout?: any
}
const publicRoutes: RouteType[] = [
    { path: "/", component: Home },
    { path: `/news/:id/*`, component: DetaiPage, layout: NewLayout },
    { path: `/new/:id/*`, component: NewPage, layout: NewLayout },
    { path: "/nha-dat-cho-thue", component: RentRealEstate, layout: NewLayout },
    { path: "/nha-dat-ban", component: SellRealEstate, layout: NewLayout },
    { path: "/tin-tuc", component: NewsPage, layout: NewLayout },
    { path: "/lien-he", component: ContactPage, layout: NewLayout }
]
const privateRoutes: RouteType[] = []
export { publicRoutes, privateRoutes }