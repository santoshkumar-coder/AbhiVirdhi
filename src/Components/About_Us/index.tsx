import React, { useEffect, useState } from 'react'
import { about_us } from '../../api_fetch/about_us'

const About = () => {

    const [data, setData] = useState<unknown>(null);

    const fetchData = async () => {
        const rs = await about_us();
        setData(rs[0]);
        console.log(rs[0]);

    }
    useEffect(() => {
        fetchData()
        window.scrollTo({
            top: 0
        })
    }, [])

    const getData = (key: string) => {
        if (data && typeof data === 'object' && key in data) {
            return (data as Record<string, any>)[key];
        }
        return null;
    };

    return (
        <div className='min-h-screen font-titillium '>

            {data ? <>
                <div className='md:flex items-center justify-center md:bg-gradient-to-r from-white via-blue-300 to-blue-500'>
                    <div className='flex justify-center items-center h-40 w-full'>
                        <h1 className='text-4xl uppercase font-extrabold'>About Us</h1>
                    </div>
                    <div className="my-5 md:mx-32 mx-5 shadow-lg bg-white rounded-lg overflow-hidden">
                        <div className="md:h-[17rem]">
                            <img
                                className="w-full h-full"
                                src={getData('imageA')}
                                alt="company info"
                            />
                        </div>
                        <div className="mt-5 px-5 py-3">
                            <h1 className="text-justify text-gray-800">
                                {getData('DescriptionA').split(".").map((item: string) => {
                                    return <p>{item}.</p>
                                })}
                            </h1>
                        </div>
                    </div>


                </div>
                <div className='md:mx-20 mx-5 my-5'>
                    <div className="shadow-2xl rounded-lg md:p-5 md:bg-gradient-to-r from-blue-500 via-blue-300 to-white transform hover:-translate-y-3 transition-transform duration-300 ">
                        <div className='md:flex md:m-10 gap-5 items-center justify-center'>
                            <div className='md:w-[50%] md:h-[17rem] '>
                                <img className='w-full h-full md:rounded-none rounded-t-lg'
                                    src={getData("imageB")}
                                    alt="company info" />
                            </div>
                            <div className='md:w-[50%] md:p-0 p-5'>
                                <h1 className='text-justify'>{getData("DescriptionB").split(".").map((item: string) => {
                                    return <p>{item}.</p>
                                })}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-20 flex justify-center items-center'>
                    <div className='w-[80%] flex flex-col justify-center items-center'>
                        <div className='md:w-[60%]'>
                            <h1 className='md:text-3xl text-xl text-center font-bold '>India's Largest Marketplace for Intracity Logistics | Revolutionizing one delivery at a time</h1>
                        </div>
                        <div className='flex gap-10 mt-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='md:text-3xl text-xl font-bold'>2014</h1>
                                <p className='md:text-base text-xs'>Year founded</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='md:text-3xl text-xl font-bold'>8 Million+</h1>
                                <p className='md:text-base text-xs'>Customers</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='md:text-3xl text-xl font-bold'>1200+</h1>
                                <p className='md:text-base text-xs'>Strong Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                :
                <div>Loading...</div>
            }
        </div >
    )
}

export default About