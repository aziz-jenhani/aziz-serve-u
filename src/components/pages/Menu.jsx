import { useContext, useEffect, useState } from "react";
import { AiOutlineMenuUnfold, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { ItemMenuContext } from "../../contexts/ItemMenuContext";
import Item from "../global/Item";
import { MdKeyboardArrowDown } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../stateglobal';




const Menu = () => {

    const dispatch = useDispatch();
    const open = useSelector((state) => state.cart.isOpen);
    const [handleResize, setHandleResize] = useState(window.innerWidth < 768);

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeTabIndex, setActiveTabIndex] = useState("All");

    const setOpen = () => {
        dispatch(setIsOpen({}))
    }
    const toggleSidebar = () => {
        setHandleResize(open)
        setOpen(!open);

    }




    const { Items } = useContext(ItemMenuContext);
    const [showSearch, setShowSearch] = useState(true);
    const [category, setCategory] = useState(["All"]);
   

    useEffect(() => {
        const categorySet = new Set(Items.map(item => item.category));
        
        setCategory(['All', ...categorySet]);



    }, [Items])
    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 768);
        }
        if (isSmallScreen) {
            setOpen(false)
        }
        window.addEventListener("resize", handleResize);
        handleResize(); // Check screen size on mount
        return () => window.removeEventListener("resize", handleResize);
    }, [isSmallScreen]);

    function handleCategorySelect(event) {
        setSelectedCategory(event.target.value);
        setActiveTabIndex(event.target.value)
    }

   // console.log(Items , categorys,activeTabIndex)

    return (
        <div className={`${open && isSmallScreen ? "opacity-30  " : ""} flex flex-col w-full h-full p-2 space-y-1`} onClick={() => { open && isSmallScreen && setOpen() }}>

            <div className="flex justify-between items-center relative space-x-2  ">
                <div className={` md:hidden hover:text-[#6C63FF] bg-gray-100 border-gray-400 p-1 border-[1px] cursor-pointer  rounded-full  w-10 h-10  `}>
                    <AiOutlineMenuUnfold className={`${open ? "rotate-180" : ""} text-3xl transition-all duration-300 `} onClick={toggleSidebar} />
                </div>
                <div className="flex items-center sm:gap-4 gap-2">
                    <h1 className="font-roboto sm:text-3xl text-2xl font-semibold text-[#343A40]">
                        Menu
                    </h1>
                    <h1 className="sm:w-16 w-8 h-5 rounded-lg sm:text-sm text-xs font-roboto bg-white flex items-center justify-center">
                        {Object.keys(Items).length}
                    </h1>
                </div>

                <div className="md:hidden absolute top-0 right-0">
                    <div className="flex justify-center items-center text-white bg-[#6C63FF] rounded-r-lg w-10 h-10">
                        <AiOutlineSearch
                            className="text-xl cursor-pointer"
                            onClick={() => setShowSearch(!showSearch)}
                        />
                    </div>
                </div>

                <div className="flex items-center border-b-2 md:w-96">
                    <input
                        type="search"
                        className={`w-full px-4 py-2 text-[#6C63FF] bg-white border rounded-sm focus:outline-none focus:border-[#6C63FF] ${showSearch ? "block" : "hidden"
                            }`}
                        placeholder="Search..."
                    />
                    <div className={`md:flex justify-center items-center text-white bg-[#6C63FF] rounded-r-lg w-10 h-10 ${showSearch ? "hidden" : "flex"
                        }`}>
                        <AiOutlineSearch
                            className="text-xl cursor-pointer"
                            onClick={() => setShowSearch(true)}
                        />
                    </div>
                </div>
            </div>




            <div className="flex py-2 md:px-3 justify-between ">
                {isSmallScreen ? (
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={handleCategorySelect}
                            className={` block appearance-none w-full bg-white border-2 border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:bg-white focus:border-[#6C63FF]`}
                        >
                            {category.map((cat) => (
                                <option key={cat} value={cat} className={`${activeTabIndex === cat ? "bg-[#6C63FF] text-white" : ""}`} >
                                    {cat}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                            <MdKeyboardArrowDown className="h-4 w-4" />
                        </div>
                    </div>
                ) : (
                    <ul className="flex font-roboto gap-3">

                        {category.map((cat) => (
                            <li
                                key={cat}
                                className={` ${activeTabIndex === cat ? "bg-[#645cff] text-white" : ""} cursor-pointer text-md font-medium w-auto lg:px-4 md:px-2 py-1 border-2 bg-white  flex items-center justify-center rounded-lg`}
                                onClick={() => setActiveTabIndex(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>

                )}
                <button className="bg-[#6C63FF] md:px-4 sm:space-x-2  rounded-md flex font-roboto font-semibold text-white  items-center ">
                    <AiOutlinePlus /> <h1 className="font-roboto">Add To Menu</h1>
                </button>
            </div>

            <div className="">
                <div className="grid grid-cols-1 gap-[30px] max-w-sm md:max-w-none
                md:mx-0 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        activeTabIndex === "All" && Items.map(item => {
                            return (<Item item={item} key={item.id} />);
                        })
                    }
                    {Items.map((item) => (
                        item.category===activeTabIndex &&  <Item item={item} key={item.id} />
                        
                    ))}
                </div>

            </div>


            



        </div>
    );
};

export default Menu;

