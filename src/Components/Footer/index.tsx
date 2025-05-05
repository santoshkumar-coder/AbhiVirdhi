import React, { useEffect, useState } from "react";
import footerLogo from "../../assests/logonew.png";
import googlePlayStore from "../../assests/googlePlayStore.png";
import appleStore from "../../assests/appstore.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { footer } from "../../api_fetch/footer";
import { social_media } from "../../api_fetch/SocialMedia";
import { vehicleTypes } from "../../api_fetch/vehicleTypes";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/action";

interface FooterApi {
  tagline: string;
  copyright: string;
}
interface SocialMeadia {
  url: string;
}

interface VehicleInfo {
  name: string;
  id: string;
}

const Footer = () => {
  const [data, setData] = useState<FooterApi | null>(null);
  const [socialmeadia, setSocialMeadia] = useState<SocialMeadia[] | null>(null);
  const [vichel, setVichel] = useState<VehicleInfo[] | null>(null);

  const fetchVichelData = async () => {
    const rs = await vehicleTypes();
    console.log(rs);

    setVichel(rs);
  };

  const navigate = useNavigate();

  const fetchData = async () => {
    const rs = await footer();
    setData(rs);
  };
  const selector = useSelector((state: AppState) => state.select_city);
  const fetchSocialMeadia = async () => {
    const rs = await social_media();
    setSocialMeadia(rs);
  };

  useEffect(() => {
    fetchVichelData();
    fetchData();
    fetchSocialMeadia();
  }, []);

  const handleEvent = () => {
    navigate(`/`);
    window.scrollTo({
      top: 0
    });
  };
  return (
    // bg-[#b1d3e5]
    <div className="w-full bg-black text-white/90  md:p-10 p-5 md:pb-2 pb-20 font-titillium">
      <div className="md:flex">
        <div className="md:w-1/5 md:block flex flex-col items-center justify-center md:border-r-2 border-gray-300 pt-0">
          <img className="w-[60%] h-auto ml-5" src={footerLogo} alt="footer" />
          <p className="text-2xl select-none md:text-start text-center">
            {data?.tagline}
          </p>
        </div>
        <div className="md:w-1/5 border-r-2 border-gray-300 px-5 md:mt-0 mt-5">
          <h1 className="md:text-xl text-2xl text-white font-bold">Company</h1>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            <Link to="/about"> About Us </Link>
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            <Link to="/blog"> Blog </Link>
          </p>
        </div>
        <div className="md:w-1/5 border-r-2 border-gray-300 px-5">
          <h1 className="md:text-xl text-2xl text-white font-bold">
            Quick Links
          </h1>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Services
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Tools
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Courier
          </p>
          {vichel?.map((item, index) => (
            <p
              className="my-5 text-gray-200 hover:text-white cursor-pointer select-none"
              key={index}
              onClick={() => handleEvent()}
            >
              {item?.name}
            </p>
          ))}
          {/* <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Three Wheelers
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Mini Trucks
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Trucks
          </p> */}
        </div>
        <div className="md:w-1/5 border-r-2 border-gray-300 px-5">
          <h1 className="md:text-xl text-2xl text-white font-bold">Support</h1>
          <p
            className="my-5 text-gray-200 hover:text-white cursor-pointer select-none"
            onClick={() => navigate("/support")}
          >
            Contact Us
          </p>
          <p
            className="my-5 text-gray-200 hover:text-white cursor-pointer select-none"
            onClick={() => navigate("/privacy_policy")}
          >
            Privacy Policy
          </p>
          <p
            className="my-5 text-gray-200 hover:text-white cursor-pointer select-none"
            onClick={() => navigate("/terms_of_service")}
          >
            Terms of Services
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Driver Partner Terms & Conditions
          </p>
          <p className="my-5 text-gray-200 hover:text-white cursor-pointer select-none">
            Zero Tolerance Policy
          </p>
          <Link
            to="/insurance_FAQS"
            className="my-5 text-gray-200 hover:text-white cursor-pointer select-none"
          >
            Insurance FAQs
          </Link>
        </div>
        <div className="md:w-1/5 px-5 flex flex-col gap-5 md:mt-0 mt-5">
          <img
            className="md:w-[90%] w-[70%]"
            src={googlePlayStore}
            alt="Google Play Store"
          />
          <img
            className="md:w-[90%] w-[70%]"
            src={appleStore}
            alt="Apple Store"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-start text-white items-center justify-between py-10">
        <div className="flex gap-5">
          {socialmeadia?.map((media, index) => (
            <Link
              key={index}
              to={media.url || "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index === 0 && (
                <IoLogoInstagram className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg" />
              )}
              {index === 1 && (
                <FaFacebookF className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg" />
              )}
              {index === 3 && (
                <CiYoutube className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg" />
              )}
              {index === 2 && (
                <FaLinkedinIn className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-gray-600 p-2 rounded-lg" />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2 text-gray-700 md:mt-0 mt-5">
          {/* <span className='text-3xl'>
                        &#169;
                    </span> */}
          {/* <p>{data?.copyright}</p> */}
          <p>©2025 Pearl Organisation PVT.Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
