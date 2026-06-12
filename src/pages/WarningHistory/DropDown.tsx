import React, { useState, useEffect , type ReactNode} from "react";


interface DropdownItem {
    id: number;
    text: string;
    icon: ReactNode;
}

interface DropdownProps {
    buttonIconLeft: ReactNode;
    buttonText: string;
    buttonIconRight: ReactNode;
    items: DropdownItem[];
    onSelect?: (item: DropdownItem) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonIconLeft, buttonText, buttonIconRight, items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedItem =
    items.find(item => item.text === buttonText);

    const handleItemClick = async (item: DropdownItem) => {
        setIsOpen(false);
        onSelect?.(item);
    };

    const dropdownItems = items
        .filter((item) => item.id !== selectedItem?.id)
        .sort((a, b) => a.text.localeCompare(b.text));

    return (
        <div className="w-52 relative inline-block  text-left">
            <button
                className={`w-full flex items-center justify-between bg-[#05428c] text-white w-full
                ${isOpen ? 'rounded-t-[12px] border-b-0' : 'rounded-[12px]'}
                 border border-white antialiased focus:outline-none
                `}
                onClick={() => setIsOpen((pre) => !pre)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className="flex items-center justify-center px-2 py-1">
                    {selectedItem?.icon || buttonIconLeft}
                </span>
                <span className="mx-2 font-inter font-bold">
                    {selectedItem?.text || buttonText}
                </span>
                <span 
                className={`flex items-center justify-center px-2 py-1 transform transition-transform 
                    ${isOpen ? 'rotate-180' : ''}
                    `}>
                    {buttonIconRight}
                </span>
            </button>
            {isOpen && (
                <div className="absolute w-full left-0 right-0 bg-[#05428c] border border-white border-t-0 antialiased rounded-b-[12px] z-10">
                    <ul className="py-2">
                        {dropdownItems.map((item) =>(
                            <li 
                                key={item.id}
                                className="flex items-center px-2 py-1 hover:bg-[#327fdb] cursor-pointer border-t border-gray-600 text-white"
                                onClick={() => handleItemClick(item)}
                            >
                                <span className="flex items-center justify-center px-2 py-1">
                                    {item.icon}
                                </span>
                                <span className="mx-2 font-inter font-bold">{item.text}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    )
}

export default Dropdown;