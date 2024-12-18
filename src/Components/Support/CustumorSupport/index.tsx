import React from 'react'
import { Link } from 'react-router-dom';
import enterpriceImage from '../../../assests/EnterpriseSupportServices.jpg';
import parkersMovers from '../../../assests/pakageandmovers.webp';
import drives from '../../../assests/drivePorter.jpg';

const CustumorSupport = () => {
    return (
        <div className='font-titillium pt-10 flex items-center justify-center'>
            <div>
                <div className='text-center'>
                    <h1 className='text-5xl font-semibold uppercase'>Help Center</h1>
                    <p className='mt-5 font-bold text-black/80'>Need assistance? We're happy to help, reach us out through the appropriate channels below.</p>
                </div>
                <div className='my-20  flex justify-center items-center'>
                    <div className='w-[80%] flex justify-center items-center gap-3'>
                        <div className='w-[50%]'>
                            <div className='flex h-40 py-5 px-2 items-center rounded-tl-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[-4px]'>
                                <img className='w-24 h-24' src="https://cdn-icons-png.freepik.com/256/15388/15388817.png?semt=ais_hybrid" alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>CUSTOMER SUPPORT</h1>
                                    <p className='font-sm text-sm mt-2'>
                                        <span className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer'>Click here</span> to read our FAQs
                                    </p>
                                    <p className='text-justify text-sm mt-2'>
                                        For support with your bookings and other queries, email us at{" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="mailto:help@porter.in">help@porter.in</Link> or call us on{" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="tel:022 4410 4410">022 4410 4410</Link>
                                    </p>
                                </div>
                            </div>



                            <div className='flex h-40 py-5 px-2 items-center rounded-bl-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[6px]'>
                                <img className='w-24 h-24 rounded-lg' src={enterpriceImage} alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>ENTERPRISE SERVICES</h1>
                                    <p className='font-sm text-sm mt-2'>If you are an enterprise client and need trucks in bulk for your business,<span className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer'>Click here</span> {" "}or mail us at {" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="mailto:help@porter.in">help@porter.in</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] '>
                        <div className='flex h-40 py-5 px-2 items-center rounded-tr-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[-4px]'>
                                <img className='w-24 h-24 rounded-lg' src={parkersMovers} alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>PACKERS AND MOVERS</h1>
                                    <p className='font-sm text-sm mt-2'>For queries and support regarding your house shifting booking, email us at {" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="mailto:help@porter.in">packermover@theporter.in</Link>{" "}
                                        or call us on
                                        {" "}<Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="tel:02244104444"> 022 4410 4444</Link>
                                        {" "}or
                                        {" "}<Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="tel:022 6268 4444"> 022 6268 4444</Link>

                                    </p>
                                </div>
                            </div>
                            <div className='flex h-40 py-5 px-2 items-center rounded-br-lg  gap-5 bg-white text-black p-2 w-full shadow-[0_8px_15px_rgba(0,0,0,0.6)] transform translate-y-[6px]'>
                                <img className='w-24 h-24 rounded-lg' src={drives} alt="" />
                                <div>
                                    <h1 className='text-sm font-bold'>DRIVE WITH PORTER</h1>
                                    <p className='font-sm text-sm mt-2'>Are you a tempo truck owner? Increase your earnings by partnering with us.
                                        <span className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer'>Click here</span>{" "}
                                        or reach us out on
                                        {" "}
                                        <Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="tel:022 6268 4444"> 022 4410 4410</Link>
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