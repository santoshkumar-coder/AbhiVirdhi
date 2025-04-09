import React, { useEffect, useState } from 'react';
import indianMap from '../../../assests/indianMap.webp';
import ourservices from '../../../assests/lineImage.svg';
import informationUser from '../../../assests/infomationUser.png';
import Carousel from '../../Carousel';
import { CAROUSAL_DATA } from '../../../constants';
import { news } from '../../../api_fetch/news';
import Marquee from 'react-fast-marquee';

interface NewsInfo {
    headline: string,
    image: string
}

const OurInformation = () => {
    const [data, setData] = useState<NewsInfo[] | null>(null);

    const fetchData = async () => {
        const rs = await news();
        setData(rs)
        console.log("news info->", rs);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        // bg-[linear-gradient(154.48deg,_#000,_#040a1a)]
        <div className='bg-[#bfdceb] text-black md:p-20 p-8 pb-5 font-titillium'>
            <div className='flex items-center justify-center'>
                <h1 className='md:w-[70%] text-[1.2rem] md:text-[2.5rem] text-center font-titillium font-[700] text-black/80'>And thanks to you, we are growing each & every day!</h1>
            </div>
            {/* <div className='my-10 flex items-center justify-center'>
                <h1 className='md:w-[65%] text-center border-2 border-yellow-800 py-3 rounded-lg text-yellow-800 font-titillium md:text-lg md:px-0 px-2'>🎉 Marhaba Dubai! We're now live & ready to take care of all your logisitical needs.</h1>
            </div> */}
            <div className=' flex justify-center items-center mt-20 font-titillium'>
                <div className='flex md:flex-nowrap flex-wrap w-[83%] justify-between w-full'>
                    <div className='font-[700] flex flex-col justify-center items-center'>
                        <h1 className='text-[2rem]'>20+</h1>
                        <h1 className='text-[1.5rem] text-gray-400'>Cities</h1>
                    </div>
                    <div className='font-[700] flex flex-col justify-center items-center'>
                        <h1 className='text-[2rem]'>5 Lakh+</h1>
                        <h1 className='text-[1.5rem] text-gray-400'>Driver Partners</h1>
                    </div>
                    <div className='font-[700] flex flex-col justify-center items-center'>
                        <h1 className='text-[2rem]'>1 Crore+</h1>
                        <h1 className='text-[1.5rem] text-gray-400'>Customers</h1>
                    </div>
                    <div className='font-[700] flex flex-col justify-center items-center'>
                        <h1 className='text-[2rem]'>10 Crore+</h1>
                        <h1 className='text-[1.5rem] text-gray-400'>Tips</h1>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-center items-center my-14'>
                <div className='h-[30rem]'>
                    <img src={indianMap} className='h-full' alt="Indian Map" />
                </div>
            </div>
            <div className='mt-28 flex items-center justify-center w-full'>
                <div className='w-[75%]'>
                    <h3 className='text-center text-sm text-gray-400 font-bold'>We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, Nashik and Kanpur</h3>
                </div>
            </div> */}
            <div className='my-16'>
                <div className='flex justify-center items-center gap-3'>
                    <img src={ourservices} alt="line " />
                    <h1>IN THE NEWS</h1>
                    <img src={ourservices} alt="line " />
                </div>

                <div>
                    <Carousel items={data || []} />
                </div>
            </div>

            <div>
                <div className='my-20 flex items-center justify-center'>
                    <div className='flex items-center justify-center gap-3'>
                        <img src={ourservices} alt="line" />
                        <h1 className='uppercase md:text-base text-sm md:text-start text-center'>SOME WORDS FROM OUR HAPPY CUSTOMERS!</h1>
                        <img src={ourservices} alt="line" />
                    </div>
                </div>
                <div className='w-full flex overflow-x-auto pb-10 scrollbar-thin'>
                    <div className="w-full py-8">
                        <Marquee
                            gradient={false}
                            speed={20}
                            className="overflow-hidden"
                            pauseOnHover
                            direction="right"
                        >
                            {[1, 2, 3, 4, 5].map((_, index) => {
                                return (
                                    <div key={index} className='w-[270px] hover:bg-[#b1d3e5] p-8 rounded-3xl min-w-[270px]'>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                                <img className='rounded-full w-14' src={informationUser} alt="user" />
                                            </div>
                                            <div>
                                                <h1>Vinay</h1>
                                                <h1>2, Wheeler, 5.0⭐</h1>
                                                <p>Delhi</p>
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <h1 className='text-justify text-lg select-none'>“Way better than naaka waalas. Have shifted all my logistics needs to Abhiviridhi and I can now safely focus on my business growth. Amazing service!”</h1>
                                        </div>
                                    </div>
                                )
                            })

                            }
                        </Marquee>
                    </div>
                    {/* <div className='w-1/4 hover:bg-gray-900 p-8 rounded-3xl min-w-[270px]'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='rounded-full w-14' src={informationUser} alt="user" />
                            </div>
                            <div>
                                <h1>Vinay</h1>
                                <h1>2, Wheeler,5.0⭐</h1>
                                <p>Delhi</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-justify text-lg select-none'>“Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!”</h1>
                        </div>
                    </div>
                    <div className='w-1/4 hover:bg-gray-900 p-8 rounded-3xl min-w-[270px]'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='rounded-full w-14' src={informationUser} alt="user" />
                            </div>
                            <div>
                                <h1>Vinay</h1>
                                <h1>2, Wheeler,5.0⭐</h1>
                                <p>Delhi</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-justify text-lg select-none'>“Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!”</h1>
                        </div>
                    </div>
                    <div className='w-1/4 hover:bg-gray-900 p-8 rounded-3xl min-w-[270px]'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='rounded-full w-14' src={informationUser} alt="user" />
                            </div>
                            <div>
                                <h1>Vinay</h1>
                                <h1>2, Wheeler,5.0⭐</h1>
                                <p>Delhi</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-justify text-lg select-none'>“Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!”</h1>
                        </div>
                    </div>
                    <div className='w-1/4 hover:bg-gray-900 p-8 rounded-3xl min-w-[270px]'>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img className='rounded-full w-14' src={informationUser} alt="user" />
                            </div>
                            <div>
                                <h1>Vinay</h1>
                                <h1>2, Wheeler,5.0⭐</h1>
                                <p>Delhi</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-justify text-lg select-none'>“Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!”</h1>
                        </div>
                    </div> */}

                </div>

            </div>

        </div>
    )
}

export default OurInformation