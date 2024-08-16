import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import LeftBox from "../components/common/LeftBox";
import RightBox from "../components/common/RightBox";
import { router } from "../utils/helper";

function AppLayout({ children }) {

    router('home')

    return (
        <div className="grid gap-x-[45px] grid-cols-[260px_1fr_285px]">
            <LeftBox />
            <div>
                <Header />
                <div>
                    {children}
                </div>
                <Footer />
            </div>
            <RightBox />
        </div>
    );
}

export default AppLayout;