import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";

const DropdownMenu = ({id}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    
    function handleDelete(id) {
        fetch(`http://localhost:8002/items/${id}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // handle successful delete here, e.g. update state
        })
        .catch(error => {
          console.error('There was a problem deleting the item:', error);
        });
      }

    const handleOptionSelect = (option) => {
       
          
        setSelectedOption(option);
        switch (option) {
            case "edit":
                // handle edit functionality
                break;
            case "delete":
                handleDelete(id)   
                             break;
            default:
                break;
        }
    };
    
    return (
        <div className="relative inline-block text-left">
            <Menu>
                {({ open }) => (
                    <div className="flex">
                        <Menu.Button className="flex items-center justify-center">
                            <BsThreeDotsVertical className="h-6 w-6 text-gray-300 hover:text-gray-600 cursor-pointer" />
                        </Menu.Button>
                        <Transition
                            show={open}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="origin-top-right absolute right-5 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                                    } block px-2 py-1 text-sm w-full text-left hover:text-green-500 hover:bg-green-100`}
                                                onClick={() => handleOptionSelect("edit")}
                                            >
                                                <HiOutlinePencilAlt className="inline-block w-4 h-4 mr-2" />
                                                Edit
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                                                    } block px-2 py-1 text-sm w-full text-left hover:text-red-500 hover:bg-red-100`}
                                                onClick={() => handleOptionSelect("delete")}
                                            >
                                                <HiOutlineTrash className="inline-block w-4 h-4 mr-2" />
                                                Delete
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </div>
                )}
            </Menu>
        </div>
    );
}
export default DropdownMenu;
