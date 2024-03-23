import Header from "../component/Header/Header";

function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;