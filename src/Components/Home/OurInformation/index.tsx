import React, { useEffect, useState } from 'react';
import indianMap from '../../../assests/indianMap.webp';
import ourservices from '../../../assests/lineImage.svg';
import informationUser from '../../../assests/infomationUser.png';
import Carousel from '../../Carousel';
import { CAROUSAL_DATA } from '../../../constants';
import { news } from '../../../api_fetch/news';

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
        <div className='bg-[linear-gradient(154.48deg,_#000,_#040a1a)] text-white p-20 pb-5 font-titillium'>
            <div className='flex items-center justify-center'>
                <h1 className='w-[70%] text-[2.5rem] text-center font-titillium font-[700] text-white/90'>And thanks to you, we are growing each & every day!</h1>
            </div>
            <div className='my-10 flex items-center justify-center'>
                <h1 className='w-[65%] text-center border-2 border-yellow-800 py-3 rounded-lg text-yellow-500 font-titillium text-lg'>🎉 Marhaba Dubai! We're now live & ready to take care of all your logisitical needs.</h1>
            </div>
            <div className=' flex justify-center items-center mt-20 font-titillium'>
                <div className='flex  w-[83%] justify-between w-full'>
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
                        <h1 className='uppercase'>SOME WORDS FROM OUR HAPPY CUSTOMERS!</h1>
                        <img src={ourservices} alt="line" />
                    </div>
                </div>
                <div className='w-full flex overflow-x-auto pb-10 scrollbar-thin'>
                    <div className='w-1/4 hover:bg-gray-900 p-8 rounded-3xl min-w-[270px]'>
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

                </div>

            </div>

        </div>
    )
}

export default OurInformation