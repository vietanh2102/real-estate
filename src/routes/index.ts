import NewLayout from "../layout/newsLayout/NewLayou"
import Home from "../page/home/Home"
import NewPage from "../page/newPage/NewPage"

interface RouteType {
    path: string,
    component: () => React.JSX.Element,
    layout?: any
}
const publicRoutes: RouteType[] = [
    { path: "/", component: Home },
    { path: `/news/:id`, component: NewPage, layout: NewLayout }
]
const privateRoutes: RouteType[] = []
export { publicRoutes, privateRoutes }