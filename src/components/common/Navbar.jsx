import classNames from "classnames";
import { FiGlobe, FiHome } from "react-icons/fi";

function Navbar() {

    const menus = [
        {icon: <FiHome/>, name: 'Top Stories', isActive: true},
        {icon: <FiGlobe/>, name: 'Around the World'},
    ]

    return ( 
        <nav>
            {menus.map((menu, index) => (
                <a href="" key={index} className={classNames({
                    'flex items-center gap-x-[22px] h-[50px] pl-[33px] rounded-r-full': true,
                    'bg-[#E0F0F8] font-bold text-[#2F9FF8]': menu.isActive
                })}>
                    <span className="size-[24px] inline-flex items-center justify-center text-[24px]">{menu.icon}</span>
                    <span>{menu.name}</span>
                </a>
            ))}
        </nav>
     );
}

export default Navbar;