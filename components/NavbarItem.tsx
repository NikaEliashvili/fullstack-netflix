import React from "react";

interface NavbaritemProps {
    label: string;
}


const NavbarItem: React.FC<NavbaritemProps> = ({label})=>{
    return (
        <div className="text-white cursor-pointer hover:text-gray-400 transition">
            {label}
        </div>
    )
}

export default NavbarItem