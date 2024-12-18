import React, { useEffect, useState } from 'react'
import { FaCircleDot } from "react-icons/fa6";
import { cities } from '../../../api_fetch/cities';

interface Cities {
    image: string,
    name: string
}


const TransportCities: React.FC = () => {
    const [data, setData] = useState<Cities[] | null>(null);

    const fetchData = async () => {
        const rs = await cities();
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='flex flex-col items-center justify-center bg-black/70 text-white py-5'>
            <div className='w-[70%]'>
                <h1 className='text-center text-2xl font-bold'>WE ARE TRANSFORMING CITIES</h1>
                <p className='text-center text-sm mt-5'>Our business is growing by the minute! We are now present in 20+ cities and have an extensive fleet base of more than 7.5L Driver Partners! We have established ourselves as a trusted logistics service provider for big or small businesses, eCommerce merchants, restaurants, supermarkets, Kirana store owners and many more for their business deliveries. Our logistics solution helps enterprises in bulk deliveries, business courier, cargo transport, last-mile delivery and so on. Our loyal customers across 20+ cities serve as a testament of our top notch service and ever expanding presence.</p>
            </div>
            <div className='flex flex-wrap w-[60%]  justify-center items-center mt-10 gap-5'>
                {data?.map((item, index) => (
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='w-[80px] h-[80px]'>
                            <img className='w-full h-full rounded-xl bg-gray-800' src={item.image} alt="item.name" />
                        </div>
                        <div className='flex items-center gap-2 leading-tight select-none' key={index}>

                            <FaCircleDot className='w-3 h-3 text-gray-400' />
                            <h1 className='text-white text-sm'>{item.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TransportCities