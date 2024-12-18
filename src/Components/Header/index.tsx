import React, { useEffect, useState } from 'react';
import { TbMenu } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { logoDynamic } from '../../api_fetch/logo';

interface Logo {
    logo: string;
}

const Header: React.FC = () => {
    const [logo, setLogo] = useState<Logo | null>(null);
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
            </div>
            <div className="lg:block hidden">
                <Link to="/support" className="font-semibold hover:text-blue-800 cursor-pointer">Support</Link>
            </div>
            <div className="lg:hidden block">
                <TbMenu className="font-bold text-3xl text-black hover:text-black/80 cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
