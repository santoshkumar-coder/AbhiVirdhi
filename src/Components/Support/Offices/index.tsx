import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { RxTriangleRight } from "react-icons/rx";
import { addresses } from '../../../api_fetch/address';

interface CityOffices {
    state_name: string,
    address: string
}
interface Address {
    headoffice_address: string,
    headoffice_state_name: string,
    addresses: CityOffices[] | null
}

const OurOffices = () => {
    const [data, setData] = useState<Address[] | null>(null);
    const fetchData = async () => {
        const rs = await addresses();
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='bg-black font-titillium text-white flex flex-col items-center justify-center py-10'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-white/90'>Our Offices</h1>
                <p className='w-10 h-1 mt-1 bg-white/90 rounded-full' />
            </div>
            <div className='flex flex-col items-center justify-center my-20'>
                <h1 className='text-3xl font-bold text-white/90 uppercase'>Head Office</h1>
                <p className='w-10 h-1 mt-1 bg-white/90 rounded-full' />
            </div>
            <div className='w-[40%]'>
                <div className='w-[60%]'>
                    <h1 className='text-2xl font-semibold'>{data && data[0]?.headoffice_state_name}</h1>
                    <p className='my-5 text-justify'>{data && data[0]?.headoffice_address}</p>
                    <Link
                        to="/support"
                        className='uppercase tracking-wide w-fit font-bold underline text-lg flex items-center gap-1 hover:scale-105 transition transform ease-in-out duration-700'
                    >
                        Get Directions
                        <RxTriangleRight className='w-6 h-6' />
                    </Link>

                </div>
            </div>

            <div className='flex flex-col items-center justify-center my-20'>
                <h1 className='text-3xl font-bold text-white/90 uppercase'>REGIONAL OFFICES</h1>
                <p className='w-10 h-1 mt-1 bg-white/90 rounded-full' />
            </div>
            <div className='w-[60%] flex justify-between flex-wrap gap-16'>
                {data && data[0].addresses?.map((item, index) => {
                    return (
                        <div className='w-[45%]'>
                            <h1 className='text-2xl font-semibold'>{item.state_name}</h1>
                            <p className='my-5 text-justify'>{item.address}</p>
                            <Link
                                to="/support"
                                className='uppercase tracking-wide text-white/70 w-fit font-bold underline text-lg flex items-center gap-1 hover:scale-105 transition transform ease-in-out duration-700'
                            >
                                Get Directions
                                <RxTriangleRight className='w-6 h-6' />
                            </Link>

                        </div>
                    )
                })}

                {/* <div className='w-[45%]'>
                    <h1 className='text-2xl font-semibold'>Delhi NCR</h1>
                    <p className='my-5 text-justify'>Plot No. F-7B, Okhla Industrial Area, Phase - 1, New Delhi - 110020</p>
                    <Link
                        to="/support"
                        className='uppercase tracking-wide text-white/70 w-fit font-bold underline text-lg flex items-center gap-1 hover:scale-105 transition transform ease-in-out duration-700'
                    >
                        Get Directions
                        <RxTriangleRight className='w-6 h-6' />
                    </Link>

                </div>
                <div className='w-[45%]'>
                    <h1 className='text-2xl font-semibold'>Hyderabad</h1>
                    <p className='my-5 text-justify'>Smartshift Logistics Solutions Pvt. Ltd,\nDarshak Chambers, Ground Floor & 1st Floor, No. 1-8-303/48/32/A, Situated near Patigadda, Rasoolpura, Secunderabad, Telangana - 500003</p>
                    <Link
                        to="/support"
                        className='uppercase tracking-wide text-white/70 w-fit font-bold underline text-lg flex items-center gap-1 hover:scale-105 transition transform ease-in-out duration-700'
                    >
                        Get Directions
                        <RxTriangleRight className='w-6 h-6' />
                    </Link>

                </div> */}
            </div>
        </div>
    )
}

export default OurOffices