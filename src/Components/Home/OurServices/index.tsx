import React, { useEffect, useState } from "react";
import ourServices from "../../../assests/ourservices.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "../../../api_fetch/Services";
import Marquee from "react-fast-marquee";

interface OurService {
  service_name: string;
  service_title: string;
}

const OurServices = () => {
  const [data, setData] = useState<OurService[] | null>(null);
  const fetchData = async () => {
    const rs = await services();
    console.log(rs);
    setData(rs);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-10">
      <div className="flex w-full justify-center">
        <div className="flex items-center uppercase gap-3 font-bold text-gray-500 font-titillium">
          <img src={ourServices} alt="services" />
          <h1>Our Services</h1>
          <img src={ourServices} alt="services" />
        </div>
      </div>
      <div className="text-white ml-10 mr-10 py-10 flex gap-5 overflow-x-auto scrollbar-thin">
        <div className="w-full py-8">
          <Marquee
            gradient={false}
            speed={20}
            className="overflow-hidden"
            pauseOnHover
            direction="left"
          >
            {data?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="
relative ml-10 pt-1 cursor-pointer
rounded-3xl h-[14rem]
bg-blue-500/80
backdrop-blur-lg
border border-blue-300/20
shadow-xl
hover:bg-blue-500/30
transition-all duration-300
"
                >
                  <h3 className="text-xs rounded-lt-3xl bg-[rgba(255,192,203,0.3)] font-semibold w-fit py-1 pl-7 pr-4 rounded-r-full mt-5">
                    {item.service_name}
                  </h3>
                  <div className="w-[15rem] px-5 pb-5">
                    <div className="my-5">
                      <h1 className="font-extrabold  text-2xl font-titillium leading-snug tracking-tight">
                        {item.service_title}
                      </h1>
                    </div>
                    {/* <div className="bg-[rgba(255,192,203,0.5)] py-3 px-6 rounded-full text-red w-fit absolute bottom-3 left-5">
                      <FaArrowRightLong />
                    </div> */}
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>

        {/* <div className='cursor-pointer bg-gradient-to-r from-[rgba(148,4,4,1)] via-[rgba(150,126,173,1)] to-[rgba(159,6,102,1)] rounded-3xl'>
                    <h3 className='text-xs bg-[rgba(255,192,203,0.3)] font-semibold w-fit py-1 pl-7 pr-4 rounded-r-full mt-8'>API Integrations</h3>
                    <div className='w-[15rem] px-5 pb-5'>
                        <div className='my-5'>
                            <h1 className='font-extrabold text-2xl font-titillium leading-snug tracking-tight'>
                                Automate your deliveries by integrating our APIs
                            </h1>
                        </div>
                        <div className='bg-[rgba(255,192,203,0.5)] py-3 px-6 rounded-full text-red w-fit'>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer bg-gradient-to-r from-[rgba(148,4,4,1)] via-[rgba(150,126,173,1)] to-[rgba(159,6,102,1)] rounded-3xl'>
                    <h3 className='text-xs bg-[rgba(255,192,203,0.3)] font-semibold w-fit py-1 pl-7 pr-4 rounded-r-full mt-8'>API Integrations</h3>
                    <div className='w-[15rem] px-5 pb-5'>
                        <div className='my-5'>
                            <h1 className='font-extrabold text-2xl font-titillium leading-snug tracking-tight'>
                                Automate your deliveries by integrating our APIs
                            </h1>
                        </div>
                        <div className='bg-[rgba(255,192,203,0.5)] py-3 px-6 rounded-full text-red w-fit'>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer bg-gradient-to-r from-[rgba(148,4,4,1)] via-[rgba(150,126,173,1)] to-[rgba(159,6,102,1)] rounded-3xl'>
                    <h3 className='text-xs bg-[rgba(255,192,203,0.3)] font-semibold w-fit py-1 pl-7 pr-4 rounded-r-full mt-8'>API Integrations</h3>
                    <div className='w-[15rem] px-5 pb-5'>
                        <div className='my-5'>
                            <h1 className='font-extrabold text-2xl font-titillium leading-snug tracking-tight'>
                                Automate your deliveries by integrating our APIs
                            </h1>
                        </div>
                        <div className='bg-[rgba(255,192,203,0.5)] py-3 px-6 rounded-full text-red w-fit'>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default OurServices;
