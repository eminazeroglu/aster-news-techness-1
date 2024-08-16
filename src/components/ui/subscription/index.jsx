import { FiGift } from "react-icons/fi";
import Button from "../button";

function SubscriptionBox() {

    const handleClick = () => {
        alert('Click');
    }

    return (
        <div className="p-[20px] rounded-[4px] bg-[#2F9FF8] text-white">
            <div className="flex items-center gap-x-[15px] whitespace-nowrap">
                <span className="text-[24px]"><FiGift /></span>
                <span>Subscribe to Premium</span>
            </div>
            <div className="flex items-center justify-between mt-[10px]">
                <span className="text-[30px] font-bold">
                    $8<small className="text-[14px] font-normal">/m</small>
                </span>

                <Button onClick={handleClick} size="lg" property="primaryDark" rounded={true}>
                    Upgrade
                </Button>
            </div>
        </div>
    );
}

export default SubscriptionBox;