import logo from "../assets/images/DisneyLogo.png"
import profile from "../assets/images/profile.png"
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
 } from "react-icons/hi2";
 import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
function Header() {
    const [toogle,setToggle]=useState(false)
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
            name:"ORIGINALS",
            icon:HiStar
        },
        {
            name:"MOVIES",
            icon:HiPlayCircle
        },
        {
            name:'TV SHOWS',
            icon:HiTv
        }

    ]
  return (
    <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-5">
        <img src={logo} className="w-[80px] object-cover md:w-[120px]" alt=""/>
        <div className="hidden md:flex gap-8">
        {menu.map((item,index)=>(
            <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))}
        </div>
        {/* responsive menu */}
        <div className="flex md:hidden gap-8">
        {menu.map((item,index)=>index<3&&(
            <HeaderItem key={index} name={""} Icon={item.icon}/>
        ))}
        </div>
        {/* 3 vertical dots */}
        <div className="md:hidden" onClick={()=>setToggle(!toogle)}>
            <HeaderItem name={""} Icon={HiDotsVertical}/>
            {toogle?<div className="absolute mt-3 bg-[#181a34] border-[1px] border-gray-700 p-3 px-5 py-4">
            {menu.map((item,index)=>index>=3&&(
            <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))}
            </div>:null}
        </div>
        </div>
        <img src={profile} alt="" className="w-[40px] rounded-full" />
    </div>
  )
}

export default Header;
