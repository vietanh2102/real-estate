import NewLayout from "../layout/newsLayout/NewLayou"
import Home from "../page/home/Home"
import NewPage from "../page/newPage/NewPage"
import RentRealEstate from "../page/RentRealEstate/RentRealEstate"
import SellRealEstate from "../page/SellRealEstate/SellRealEstate"

interface RouteType {
    path: string,
    component: () => React.JSX.Element,
    layout?: any
}
const publicRoutes: RouteType[] = [
    { path: "/", component: Home },
    { path: `/news/:id/*`, component: NewPage, layout: NewLayout },
    { path: "/nha-dat-cho-thue", component: RentRealEstate, layout: NewLayout },
    { path: "/nha-dat-ban", component: SellRealEstate, layout: NewLayout }
]
const privateRoutes: RouteType[] = []
export { publicRoutes, privateRoutes }