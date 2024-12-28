
import { TbMenu } from "react-icons/tb";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { logoDynamic } from "../../../api_fetch/logo";
import { CiSearch } from "react-icons/ci";
import { blog_category } from "../../../api_fetch/blogs_category";


interface Logo {
    logo: string;
}
interface Blog_category_data {
    name: string,
    id: string
}

const BlogHeader: React.FC = () => {
    const [logo, setLogo] = useState<Logo | null>(null);
    const [category_data, setCategory_Data] = useState<Blog_category_data[] | null>(null)
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const rs = await logoDynamic();
            const rsCategory = await blog_category();
            setCategory_Data(rsCategory);
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
                    <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Community Guidelines</Link>
                    <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Life at Porter</Link>
                    <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Impact Tales</Link>
                    <Link to="/blog" className="hover:text-blue-800 cursor-pointer ">Enterprise Focus</Link>
                    <select name="" id="" className="cursor-pointer" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        navigate(`/blog/${e.target.value}`)
                    }}>
                        <option value="" disabled selected>Select a category</option>
                        {category_data?.map((item, index) => {
                            return (
                                <option value={item.id}>{item.name}</option>
                            )
                        })}

                    </select>
                </div>


                <div className="lg:flex items-center justify-center gap-5 hidden ">
                    <CiSearch className="w-8 h-8 cursor-pointer" />
                    <Link to="/" className="font-semibold bg-[#0445DA] text-white cursor-pointer py-2 px-3 rounded-lg hover:bg-white hover:text-[#0445DA] border-2 border-[#0445DA]">Gen An Estimate</Link>
                </div>
                <div className="lg:hidden block mr-5" onClick={() => setShowMenu(true)}>
                    <TbMenu className="font-bold text-3xl text-black hover:text-black/80 cursor-pointer" />
                </div>
            </header>
            {showMenu && <Header_Menu logo={logo?.logo || ""} setShowMenu={setShowMenu} showMenu={showMenu} />}
        </div>
    );
};

export default BlogHeader;

interface Header_Menu_Props {
    logo: string
    setShowMenu: (value: boolean) => void,
    showMenu: boolean
}

const Header_Menu: React.FC<Header_Menu_Props> = ({ logo, setShowMenu, showMenu }) => {
    const [show, setShow] = useState(false);
    const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setShow(false);
            setTimeout(() => {
                setShowMenu(false)
            }, 700);
        }
    }
    useEffect(() => {
        setShow(true)
    }, [showMenu])
    return (
        <div className={`fixed top-0 w-screen h-screen bg-blue-800/70 z-20 transition-all duration-500 ${show ? "opacity-100" : "opacity-0"}`}
            onClick={(e) => handleCloseMenu(e)}
        >
            <div className={`fixed w-1/2 bg-blue-400 h-screen transition-all duration-700 ${show ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col justify-center items-center">
                    <div className='w-48 h-48'>
                        <img className='w-full h-full' src={logo ? logo : ""} alt="logo"
                            onClick={() => {
                                // navigate("/")
                                // setShow(false);
                                // setTimeout(() => {
                                //     setShowHeaderMenu(false);
                                // }, 700)
                            }
                            }
                        />
                    </div>
                    <div className='space-y-5 text-lg'>
                        <div>
                            <NavLink
                                to="/"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                Enterprise Focus
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                Impact Tales
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                Life at Porter
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to="/"
                                onClick={() => {
                                    setShow(false);
                                    setTimeout(() => {
                                        setShowMenu(false);
                                    }, 700)
                                }}
                                className={({ isActive }) => `font-semibold ${isActive ? "text-[rgb(0,0,0)]" : "text-white"}`}>
                                Enterprise Focus
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
