import { useEffect } from "react";
import { toTopPage } from "../../hooks/scrollTop";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

interface Props {
    children: React.JSX.Element
}
function DefaultLayout({ children }: Props) {
    useEffect(() => {
        toTopPage(0)
    }, [])
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;