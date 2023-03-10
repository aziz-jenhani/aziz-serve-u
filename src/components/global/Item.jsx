import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DropdownMenu from './DropdownMenu';
//import cart context




const Item = ({ item,handleItemDelete }) => {
    const { id, image, category, name, price } = item;

    return (
        <div className=" mx-auto relative">
            <div className='border border-[#e4e4e4]   
                overflow-hidden group transition bg-white rounded-xl'>
                <div className="w-full h-full flex justify-center item-center flex-col p-1">
                    {/* image */}
                    <div className="w-full mx-auto flex p-3 ">
                        <img className='max-h-[160px] group-hover:scale-105 duration-300 rounded-xl w-full' src={image} alt="" />

                    </div>
                    <div className="p-3">
                        <h2 className='font-semibold font-roboto text-[#343A40] text-sm mb-1 '>{name}</h2>
                        <div className='text-xs font-roboto capitalize text-[#AEAEAE] mb-1'>{category}</div>


                        <div className=" flex justify-between items-center">
                            <div className='font-semibold text-[#10B981] font-roboto text-sm'>{price} DT</div>
                            <div className="absolute right-2 bottom-4 p-2"><DropdownMenu id={id} ItemMenuContext={handleItemDelete}/></div>
                        </div>

                    </div>

                </div>

            </div>
            {/*categories*/}

        </div>)
};

export default Item;
