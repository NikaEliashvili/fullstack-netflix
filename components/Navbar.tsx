import MobileMenu from "./MobileMenu"
import NavbarItem from "./NavbarItem"
import {BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'
import { useCallback, useState, useEffect } from "react"
import AccountMenu from "./AccountMenu"


const TOP_OFFSET = 66



const Navbar = ()=>{
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)
    useEffect(()=>{
        const handleScore = ()=>{
            if(window.scrollY >= TOP_OFFSET){
                setShowBackground(true)
            }
            else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScore)

        return ()=>window.removeEventListener('scroll', handleScore)

    }, [])




    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu(prev=>!prev)
    }, [])
    const toggleshowAccountMenu = useCallback(()=>{
        setShowAccountMenu(prev=>!prev)
    }, [])

    return (
        <nav 
        className="
                w-full
                fixed
                z-40
              "
            >
            <div
                className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                  
                    ${showBackground ? "bg-zinc-900 bg-opacity-90" : ''}
                `}
            >
                <img 
                className="h-4 lg:h-7"
                src="/images/logo.png" alt="Netflix" 
                />
                <div
                className="
                 flex-row
                 ml-8
                 gap-7
                 hidden
                 lg:flex
                "
                >
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Films"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by languages"/>
                </div>
                <div
                className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative z-1">
                    <div 
                    onClick={toggleMobileMenu}
                    className="flex flex-row items-center gap-2">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown 
                    className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    </div>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-400 cursor-pointer" >
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-400 cursor-pointer" >
                        <BsBell />
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div 
                        onClick={toggleshowAccountMenu}
                        className="w-6 h-6 lg:w-10 lg:h-10 rounded-sm overflow-hidden" >
                            <img src="/images/default-avatar.png" alt="profile" />
                        </div>
                        <BsChevronDown  
                        onClick={toggleshowAccountMenu}
                        className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
            
        </nav>
    )
  }

  export default Navbar