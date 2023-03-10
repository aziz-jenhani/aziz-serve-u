import logo from "../../assets/serveu.png";
import group from "../../assets/Group.png";
import {useDispatch,useSelector} from 'react-redux';
import {setIsOpen} from '../../stateglobal';
import { FiPieChart } from 'react-icons/fi';
import { SlBookOpen } from 'react-icons/sl';
import { TbClipboardText } from 'react-icons/tb';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineRoomService } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useState } from "react";



const Sidebar2 = () => {
    //const [open, setOpen] = useState(true);
    
    const dispatch=useDispatch();
    const [activeTabIndex, setActiveTabIndex] = useState("Dashboard");

    const open=useSelector((state)=>state.cart.isOpen);
    const setOpen=()=>{
        dispatch(setIsOpen({}))
    }
   
    return (

        <div className="flex items-start justify-start ">
            <div className={`${open ? "h-full" : "h-16 "} flex items-start justify-center`}>

                <div className={`${open  ? "w-44" : "hidden "} md:block  lg:w-72 w-52 h-full`}  >
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
                                <Link to="/" className={`${activeTabIndex==="Dashboard" ?"bg-[#6C63FF] text-white":"" } 
                                flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#b0acf9] hover:text-white rounded-lg`} onClick={() => setActiveTabIndex("Dashboard")} >

                                    <FiPieChart className={`${open ? "text-xl" : "text-2xl"}`} /><h1 >Dashboard</h1>
                                </Link>
                                <Link to="/menu" className={`${activeTabIndex==="Menu" ?"bg-[#6C63FF] text-white":"" } 
                                flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#b0acf9] hover:text-white rounded-lg`} onClick={() => setActiveTabIndex("Menu")} >
                                    <SlBookOpen className={`${open ? "text-xl" : "text-2xl"}`} /><h1>Menu</h1>
                                </Link>
                                <Link to="/tables" className={`${activeTabIndex==="Tables" ?"bg-[#6C63FF] text-white":"" } 
                                flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#b0acf9] hover:text-white rounded-lg`} onClick={() => setActiveTabIndex("Tables")} >
                                    <MdOutlineRoomService className={`${open ? "text-xl" : "text-2xl"}`} /><h1>Tables</h1>
                                </Link>
                                <Link to="/orders" className={`${activeTabIndex==="Orders   " ?"bg-[#6C63FF] text-white":"" } 
                                flex py-3 px-3 space-x-4 cursor-pointer hover:bg-[#b0acf9] hover:text-white rounded-lg`} onClick={() => setActiveTabIndex("Orders   ")}>
                                    <TbClipboardText className={`${open ? "text-xl" : "text-2xl"}`} /><h1>Orders</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-1 h-1/6 bg-white rounded-xl  flex justify-center px-3 flex-col my-5 font-roboto font-normal">
                            <div className=" flex py-3 px-3 space-x-4 cursor-pointer rounded-lg">
                                <AiOutlineSetting className={`${open ? "text-xl" : "text-2xl"}`} /><h1>Settings</h1>
                            </div>
                            <div className=" flex py-3 px-3 space-x-4 cursor-pointer  rounded-lg">
                                <BiLogOut className={`${open ? "text-xl" : "text-2xl"}`} /><h1>BiLogOut</h1>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
};
export default Sidebar2;