import Home from "../page/home/Home"

interface RouteType {
    path: string,
    component: () => React.JSX.Element,
    layout?: boolean
}
const publicRoutes: RouteType[] = [
    { path: "/", component: Home }
]
const privateRoutes: RouteType[] = []
export { publicRoutes, privateRoutes }