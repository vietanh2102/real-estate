import { lazy } from "react";

const NewLayout = lazy(() => import("../layout/newsLayout/NewLayout"));
const Home = lazy(() => import("../page/home/Home"));
const DetailPage = lazy(() => import("../page/DetailPage/DetailPage"));
const RentRealEstate = lazy(
  () => import("../page/RentRealEstate/RentRealEstate")
);
const SellRealEstate = lazy(
  () => import("../page/SellRealEstate/SellRealEstate")
);
const NewsPage = lazy(() => import("../page/NewsPage/NewsPage"));
const NewPage = lazy(() => import("../page/NewPage/NewPage"));
const ContactPage = lazy(() => import("../page/ContactPage/ContactPage"));
const LoginPage = lazy(() => import("../page/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../page/ResgiterPage/ResgiterPage"));
const RegisterLayout = lazy(
  () => import("../layout/RegisterLayout/RegisterLayout")
);

interface RouteType {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  layout?: unknown;
}
const publicRoutes: RouteType[] = [
  { path: "/", component: Home },
  { path: `/news/:id/*`, component: DetailPage, layout: NewLayout },
  { path: `/new/:id/*`, component: NewPage, layout: NewLayout },
  { path: "/nha-dat-cho-thue", component: RentRealEstate, layout: NewLayout },
  { path: "/nha-dat-ban", component: SellRealEstate, layout: NewLayout },
  { path: "/tin-tuc", component: NewsPage, layout: NewLayout },
  { path: "/lien-he", component: ContactPage, layout: NewLayout },
  { path: "/login", component: LoginPage, layout: RegisterLayout },
  { path: "/resgiter", component: RegisterPage, layout: RegisterLayout },
];
const privateRoutes: RouteType[] = [];
export { publicRoutes, privateRoutes };
