import React from "react";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible})=>{
    if(!visible){
        return null
    }

    return (
        <div className={`scale-y-1 bg-black w-56 absolute top-11 -left-1 rounded-lg py-0 flex-col border border-slate-300 overflow-hidden transform-gpu
        ease-in-out duration-0 animate-popdown`}
        >
            {/* origin-top-right scale-y-0 opacity-0 -z-1 */}
            <div className="flex flex-col">
                <div className="px-3 text-center text-white hover:underline py-2 border-b border-slate-500">
                    Home
                </div>
                <div className="px-3 text-center text-white hover:underline py-2 border-b border-slate-500">
                    Series
                </div>
                <div className="px-3 text-center text-white hover:underline py-2 border-b border-slate-500">
                    Films
                </div>
                <div className="px-3 text-center text-white hover:underline py-2 border-b border-slate-500">
                    New & Popular
                </div>
                <div className="px-3 text-center text-white hover:underline py-2 border-b border-slate-500">
                    My List
                </div>
                <div className="px-3 text-center text-white hover:underline py-2 border-b-0 border-slate-500">
                    Browse by Languages
                </div>
            </div>

        </div>
    )
}

export default MobileMenu