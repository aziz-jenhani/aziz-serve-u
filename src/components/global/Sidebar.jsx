import logo from "../../assets/serveu.png";
import group from "../../assets/Group.png";

import { FiPieChart } from 'react-icons/fi';
import { SlBookOpen } from 'react-icons/sl';
import { TbClipboardText } from 'react-icons/tb';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdOutlineRoomService } from 'react-icons/md';
import { IoIosArrowRoundBack } from 'react-icons/io';

import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
        setOpen(!open);
    }
    return (
        <div className="flex items-center justify-center">
            <div className={`${!open ? "left-[66px]":"left-[147px]"} hover:text-[#6C63FF] bg-gray-100 border-gray-400 p-1 border-[1px] cursor-pointer  rounded-full  w-10 h-10  lg:hidden absolute  `}>
                <IoIosArrowRoundBack className={`${!open ? "rotate-180" : ""} text-3xl transition-all duration-300 `} onClick={toggleSidebar} />
            </div>
            <div className={`${open ? "w-44" : "w-[5.8rem]"} lg:w-72 w-52 h-full`}  >
                <div className="m-2  h-[97.5%]">
                    <div className="h-5/6 bg-white rounded-xl" >

                        {open ?
                         <div className="p-5 w-[172px] pl-8 py-5">

                            <img src={logo} alt="serveu" className="cursor-pointer" />
                        </div> : 
                        <div className="p-5 w-20 py-5">

                            <img src={group} alt="Group" className="cursor-pointer" />
                        </div>}



                        <div className=" flex justify-center px-3 flex-col my-5 font-roboto font-normal">
                            <Link to="/" className=" flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#6C63FF] hover:text-white rounded-lg" >

                                <FiPieChart className={`${open ? "text-xl" : "text-2xl"}`} /><h1 className={`${open ? "" : "hidden   "}`}>Dashboard</h1>
                            </Link>
                            <Link to="/menu" className=" flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#6C63FF] hover:text-white rounded-lg">
                                <SlBookOpen className={`${open ? "text-xl" : "text-2xl"}`} /><h1 className={`${open ? "" : "hidden   "}`}>Menu</h1>
                            </Link>
                            <Link to="/tables" className=" flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#6C63FF] hover:text-white rounded-lg">
                                <MdOutlineRoomService className={`${open ? "text-xl" : "text-2xl"}`} /><h1 className={`${open ? "" : "hidden   "}`}>Tables</h1>
                            </Link>
                            <Link to="/orders" className=" flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#6C63FF] hover:text-white rounded-lg">
                                <TbClipboardText className={`${open ? "text-xl" : "text-2xl"}`} /><h1 className={`${open ? "" : "hidden   "}`}>Orders</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-1 h-1/6 bg-white rounded-xl  flex justify-center px-3 flex-col my-5 font-roboto font-normal">
                        <div className=" flex py-3 px-3 space-x-4 cursor-pointer rounded-lg">
                            <AiOutlineSetting className={`${open ? "text-xl" : "text-2xl"}`}/><h1 className={`${open ? "" : "hidden   "}`}>Settings</h1>
                        </div>
                        <div className=" flex py-3 px-3 space-x-4 cursor-pointer  rounded-lg">
                            <BiLogOut className={`${open ? "text-xl" : "text-2xl"}`}/><h1 className={`${open ? "" : "hidden   "}`}>BiLogOut</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Sidebar;