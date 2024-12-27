import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import enterpriceImage from '../../../assests/EnterpriseSupportServices.jpg';
import parkersMovers from '../../../assests/pakageandmovers.webp';
import drives from '../../../assests/drivePorter.jpg';
import { support } from '../../../api_fetch/support';

interface CustumorSupportData {
    customer_support_email: string,
    customer_support_number: string,
    drive_with_porter_number: string,
    packers_email: string,
    packers_numbers: []
}

const CustumorSupport = () => {
    const [data, setData] = useState<CustumorSupportData[] | null>(null)
    const fetchData = async () => {
        const rs = await support();
        console.log(rs);
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='font-titillium pt-10 flex items-center justify-center'>
            <div>
                <div className='text-center'>
                    <h1 className='md:text-5xl text-2xl font-semibold uppercase'>Help Center</h1>
                    <p className='mt-5 font-bold md:text-base text-sm text-black/80'>Need assistance? We're happy to help, reach us out through the appropriate channels below.</p>
                </div>
                <div className='md:my-20 my-10 flex justify-center items-center'>
                    <div className='w-[80%] md:flex justify-center items-center gap-3'>
                        <div className='md:w-[50%]'>
                            <div className='flex md:h-40 h-fit py-5 px-2 items-center md:rounded-tl-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[-4px]'>
                                <img className='w-24 h-24' src="https://cdn-icons-png.freepik.com/256/15388/15388817.png?semt=ais_hybrid" alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>CUSTOMER SUPPORT</h1>
                                    <p className='font-sm text-sm mt-2'>
                                        <span className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer'>Click here</span> to read our FAQs
                                    </p>
                                    <p className='text-justify text-sm mt-2'>
                                        For support with your bookings and other queries, email us at{" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to={`mailto:${data && data[0]?.customer_support_email}`}>{data && data[0]?.customer_support_email}</Link> or call us on{" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to={`tel:${data && data[0]?.customer_support_number}`}>{data && data[0]?.customer_support_number}</Link>
                                    </p>
                                </div>
                            </div>



                            <div className='flex md:h-40 h-fit py-5 px-2 items-center md:rounded-bl-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[6px]'>
                                <img className='w-24 h-24 rounded-lg' src={enterpriceImage} alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>ENTERPRISE SERVICES</h1>
                                    <p className='font-sm text-sm mt-2'>If you are an enterprise client and need trucks in bulk for your business,<span className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer'>Click here</span> {" "}or mail us at {" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to={`mailto:${data && data[0]?.customer_support_email}`}>{data && data[0]?.customer_support_email}</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[50%] md:mt-0 mt-5'>
                            <div className='flex md:h-40 h-fit py-5 px-2 items-center md:rounded-tr-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[-4px]'>
                                <img className='w-24 h-24 rounded-lg' src={parkersMovers} alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>PACKERS AND MOVERS</h1>
                                    <p className='font-sm text-sm mt-2'>For queries and support regarding your house shifting booking, email us at {" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to={`mailto:${data && data[0]?.packers_email}`}>{data && data[0]?.packers_email}</Link>{" "}
                                        or call us on
                                        {data && data[0]?.packers_numbers?.map((item: string, index: number) => (
                                            <span key={index}>
                                                <Link
                                                    className="hover:text-blue-400 cursor-pointer"
                                                    to={`tel:${item}`}
                                                >
                                                    {item}
                                                </Link>
                                                {index < data[0].packers_numbers.length - 1 && ' or '}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <div className='flex md:h-40 h-fit py-5 px-2 items-center md:rounded-br-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[6px]'>
                                <img className='w-24 h-24 rounded-lg' src={drives} alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>DRIVE WITH PORTER</h1>
                                    <p className='font-sm text-sm mt-2'>Are you a tempo truck owner? Increase your earnings by partnering with us.
                                        <span className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer'>Click here</span>{" "}
                                        or reach us out on
                                        {" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to={`tel:${data && data[0]?.drive_with_porter_number}`}> {data && data[0]?.drive_with_porter_number}</Link>
                                        (add your city code)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustumorSupport