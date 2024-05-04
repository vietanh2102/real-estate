import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";


function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;