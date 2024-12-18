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
    }, [])

    const getData = (key: string) => {
        if (data && typeof data === 'object' && key in data) {
            return (data as Record<string, any>)[key];
        }
        return null; // or some default value
    };

    return (
        <div className='min-h-screen font-titillium '>

            {data ? <>
                <div className='flex items-center justify-center  '>
                    <div className='flex justify-center items-center h-40 w-full'>
                        <h1 className='text-4xl uppercase font-extrabold'>About Us</h1>
                    </div>
                    <div className="my-5 mx-32 shadow-lg bg-white rounded-lg overflow-hidden">
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
                <div className='mx-20'>
                    <div className="shadow-2xl rounded-lg p-5 bg-gradient-to-r from-gray-800 via-gray-700 to-white transform hover:-translate-y-3 transition-transform duration-300 ">
                        <div className='flex m-10 gap-5 items-center justify-center'>
                            <div className='w-[50%] md:h-[17rem]'>
                                <img className='w-full h-full'
                                    src={getData("imageB")}
                                    alt="company info" />
                            </div>
                            <div className='w-[50%]'>
                                <h1 className='text-justify'>{getData("DescriptionB").split(".").map((item: string) => {
                                    return <p>{item}.</p>
                                })}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-20 flex justify-center items-center'>
                    <div className='w-[80%] flex flex-col justify-center items-center'>
                        <div className='w-[60%]'>
                            <h1 className='text-3xl text-center font-bold '>India's Largest Marketplace for Intracity Logistics | Revolutionizing one delivery at a time</h1>
                        </div>
                        <div className='flex gap-10 mt-10'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-3xl font-bold'>2014</h1>
                                <p>Year founded</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-3xl font-bold'>8 Million+</h1>
                                <p>Customers</p>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-3xl font-bold'>1200+</h1>
                                <p>Strong Team</p>
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