import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VEHICLE_TYPES } from '../../../constants';
import { FaLongArrowAltRight } from "react-icons/fa";
import { vehicleTypes } from '../../../api_fetch/vehicleTypes';
interface VehicleInfo {
    name: string,
    image: string
}
const Other_services = () => {
    const params = useParams();
    const [data, setData] = useState<VehicleInfo[] | null>(null);
    const fetchData = async () => {
        const rs = await vehicleTypes();
        setData(rs)
        console.log(rs);

    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='flex flex-col items-center justify-center font-titillium py-10'>
            <div>
                <h1 className='text-xl font-bold'>Other Services to Choose From</h1>
            </div>
            <div className='flex items-center justify-center gap-10 mt-10'>
                {data?.map((item, index) => (
                    <div className='text-center '>
                        {
                            item.name !== params.serviceInformation &&
                            <div className='bg-blue-50 p-2 rounded-lg'>
                                <img className='w-48 h-32 rounded-lg' src={item.image} alt={item.name} />
                                <h1 className='mt-5'>{item.name}</h1>
                                <div className='text-center flex items-center justify-center mt-3'>
                                    <span className='bg-blue-600 px-5 py-0 text-white hover:scale-110 trasition-all duration-300 ease-in-out cursor-pointer rounded-full'>
                                        <FaLongArrowAltRight className=' w-5 h-5' />
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Other_services