import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SubscriptionBox from "../ui/subscription";

function LeftBox() {
    return (  
        <aside className="pr-[17px]">
            <div>
                <Link className="py-[20px] px-[30px] flex items-center gap-[15px]">
                    <img src="/logo.svg" alt="Aster News" />
                    <span>Aster News</span>
                </Link>
            </div>
            <Navbar/>

            <div className="pl-[17px]">
                <SubscriptionBox/>
            </div>
        </aside>
    );
}

export default LeftBox;