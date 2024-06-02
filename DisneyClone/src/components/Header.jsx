import logo from "./..//assets/images/DisneyLogo.png"
import profile from "./../assets/images/profile.png"
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,
    HiPlus
} from "react-icons/hi2"
const menu=[
    {
        name:"HOME",
        icon:HiHome
    },
    {
        name:"SEARCH",
        icon:HiMagnifyingGlass
    },
    {
        name:"WATCHLIST",
        icon:HiPlus
    },
    {
        name:"ORGINALS",
        icon:HiStar
    },
    {
        name:"MOVIES",
        icon:HiPlayCircle
    },
    {
        name:"SERIES",
        icon:HiTv
    }

]
import HeaderItem from "./HeaderItem"
function Header(){
    
    return (
        <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
        <img src={logo} alt="" className="w-[80px]md:w-[115px] object-cover" />
        {menu.map((item,index)=>(
            <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <img className="w-[40px] rounded-full" src={profile} alt="" />
        </div>
    )
}
export default Header