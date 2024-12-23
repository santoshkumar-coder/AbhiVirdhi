import React, { useEffect, useState } from 'react';
import footerLogo from '../../assests/logonew.png'
import googlePlayStore from '../../assests/googlePlayStore.png'
import appleStore from '../../assests/appstore.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { footer } from '../../api_fetch/footer';
import { social_media } from '../../api_fetch/SocialMedia';

interface FooterApi {
    tagline: string,
    copyright: string
}
interface SocialMeadia {
    url: string
}

const Footer = () => {

    const [data, setData] = useState<FooterApi | null>(null);
    const [socialmeadia, setSocialMeadia] = useState<SocialMeadia[] | null>(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        const rs = await footer();
        setData(rs)
    }
    const fetchSocialMeadia = async () => {
        const rs = await social_media();
        setSocialMeadia(rs)
    }
    useEffect(() => {
        fetchData();
        fetchSocialMeadia();
    }, [])
    return (
        <div className='w-full bg-black text-yellow-500  p-10 pb-2 font-titillium'>
            <div className='flex'>
                <div className='w-1/5 border-r-2 border-gray-800 pt-0'>
                    <img className='w-[60%] h-auto ml-5' src={footerLogo} alt="footer" />
                    <p className='text-2xl select-none'>{data?.tagline}</p>
                </div>
                <div className='w-1/5 border-r-2 border-gray-800 px-5'>
                    <h1 className='text-xl font-bold'>
                        Company
                    </h1>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>
                        <Link to="/about"> About Us </Link>

                    </p>

                </div>
                <div className='w-1/5 border-r-2 border-gray-800 px-5'>
                    <h1 className='text-xl font-bold'>
                        Quick Links
                    </h1>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Services</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Tools</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Courier</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Two Wheelers</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Three Wheelers</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Mini Trucks</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Trucks</p>
                </div>
                <div className='w-1/5 border-r-2 border-gray-800 px-5'>
                    <h1 className='text-xl font-bold'>
                        Support
                    </h1>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'
                        onClick={() => navigate("/support")}
                    >Contact Us</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'onClick={()=>navigate("/privacy_policy")}>Privacy Policy</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Terms of Services</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Driver Partner Terms & Conditions</p>
                    <p className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Zero Tolerance Policy</p>
                    <Link to="/insurance_FAQS" className='my-5 text-yellow-400 hover:text-yellow-800 cursor-pointer select-none'>Insurance FAQs</Link>
                </div>
                <div className='w-1/5 px-5 flex flex-col gap-5'>
                    <img className='w-[90%]' src={googlePlayStore} alt="Google Play Store" />
                    <img className='w-[90%]' src={appleStore} alt="Apple Store" />
                </div>
            </div>
            <div className='flex justify-between py-10'>
                <div className='flex gap-5'>
                    {socialmeadia?.map((media, index) => (
                        <Link key={index} to={media.url || '/'} target="_blank" rel="noopener noreferrer">
                            {index === 0 && <IoLogoInstagram className='w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg' />}
                            {index === 1 && <FaFacebookF className='w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg' />}
                            {index === 3 && <CiYoutube className='w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg' />}
                            {index === 2 && <FaLinkedinIn className='w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg' />}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-2 text-yellow-700'>
                    {/* <span className='text-3xl'>
                        &#169;
                    </span> */}
                    <p>{data?.copyright}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;