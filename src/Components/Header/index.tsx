import React, { useEffect, useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logoDynamic } from '../../api_fetch/logo';
import { MdSupportAgent } from "react-icons/md";

interface Logo {
    logo: string;
}

const Header: React.FC = () => {
    const [logo, setLogo] = useState<Logo | null>(null);
    const [showHeaderMenu, setShowHeaderMenu] = useState<boolean>(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const rs = await logoDynamic();
            console.log(rs.logo);
            setLogo(rs);
        } catch (error) {
            console.error("Failed to fetch logo:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <header className="border-b-2 border-gray-200 max-h-20 flex lg:justify-around justify-between items-center sticky top-0 z-20 bg-white">
                <div>
                    {logo?.logo ? (
                        <img
                            src={logo.logo}
                            className="cursor-pointer select-none w-24 h-20"
                            alt="logo"
                            onClick={() => navigate('/')}
                        />
                    ) : (
                        <div className="w-24 h-20 bg-gray-200 flex items-center justify-center">
                            Loading...
                        </div>
                    )}
                </div>
                <div className="lg:flex hidden gap-5 font-semibold">
                    <Link to="/enterprise" className="hover:text-blue-800 cursor-pointer">For Enterprise</Link>
                    <Link to="/delivery_Partners" className="hover:text-blue-800 cursor-pointer">Delivery Partners</Link>
                    <Link to="/about" className="hover:text-blue-800 cursor-pointer">About</Link>
                    <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Blogs</Link>
                </div>
                <div className="lg:block hidden">
                    <Link to="/support" className="font-semibold hover:text-blue-800 cursor-pointer">
                        <MdSupportAgent className='w-8 h-8' />
                    </Link>
                </div>
                <div className="lg:hidden block mr-5">
                    <TbMenu onClick={() => setShowHeaderMenu(true)} className="font-bold text-3xl text-black hover:text-black/80 cursor-pointer" />
                </div>
            </header>
            {showHeaderMenu && <HeaderMenu setShowHeaderMenu={setShowHeaderMenu} showHeaderMenue={showHeaderMenu} logo={logo?.logo || null} />}
        </div>
    );
};

export default Header;


interface HeaderMenuProps {
    setShowHeaderMenu: (value: boolean) => void,
    logo: string | null,
    showHeaderMenue: boolean
}
const HeaderMenu: React.FC<HeaderMenuProps> = ({ setShowHeaderMenu, logo, showHeaderMenue }) => {
    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setShow(false);
            setTimeout(() => {
                setShowHeaderMenu(false);
            }, 700)
        }
    }
    useEffect(() => {
        if (showHeaderMenue) {
            setShow(true)
        }
    }, [showHeaderMenue])
    return (
        <div className={`fixed top-0 h-screen w-screen bg-blue-800/70 z-20 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`} onClick={(e) => handleClick(e)}>
            <div
                className={`fixed top-0 left-0 w-1/2 h-full bg-blue-400 z-20 transition-all duration-700 ${show ? "translate-x-0" : "-translate-x-full"
                    }`}
            >

                <div className='flex flex-col items-center justify-center'>
                    <div className='w-48 h-48'>
                        <img className='w-full h-full' src={logo ? logo : ""} alt="logo"
                            onClick={() => {
                                navigate("/")
                                setShow(false);
                                setTimeout(() => {
                                    setShowHeaderMenu(false);
                                }, 700)
                            }
                            }
                        />
                    </div>
                    <div className='space-y-5 text-lg'>
                        <div>
                            <NavLink
                                to="/enterprise"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowHeaderMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                For Enterprise
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/delivery_Partners"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowHeaderMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                Delivery Partners
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/support"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowHeaderMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                Support
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
