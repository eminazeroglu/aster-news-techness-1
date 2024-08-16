import { FiHome, FiMail, FiSearch, FiUser } from "react-icons/fi";
import menus from "../../router/menus";
import { Link } from "react-router-dom";
import { router } from "../../utils/helper";

function Header() {

    return (
        <header className="py-[15px] gap-x-[45px] flex items-center">
            <div className="flex items-center w-[390px] bg-[#ECF5F8] pl-[14px]">
                <input type="text" placeholder="Search for news.." className="h-[46px] flex-1 bg-transparent outline-none placeholder:text-[#A7B9C4]" />
                <span className="size-[46px] text-[18px] inline-flex items-center justify-center">
                    <FiSearch />
                </span>
            </div>
            <div className="flex items-center gap-x-[15px]">
                {menus.map((menu, index) => (
                    <Link to={router(menu.route)} key={index} className="flex items-center gap-x-[8px] px-[10px] h-[46px]">
                        <span>
                            {menu.icon}
                        </span>
                        <span>{menu.name}</span>
                    </Link>
                ))}
            </div>
        </header>
    );
}

export default Header;