import { useEffect } from "react";
import { toTopPage } from "../../hooks/scrollTop";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import { useParams } from "react-router-dom";

interface Props {
    children: React.JSX.Element
}
function DefaultLayout({ children }: Props) {
    const path = useParams()
    useEffect(() => {
        toTopPage(0)
    }, [path])
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;