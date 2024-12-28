import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Location from './Location';
import { useNavigate } from 'react-router-dom';
import { VEHICLE_TYPES } from '../../../constants';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/action';
import { vehicleTypes } from '../../../api_fetch/vehicleTypes';

interface VehicelsProps {
    setCity: (city: boolean) => void;
    setEstimates: (estimates: boolean) => void;
    city_id: number
}

interface VehicleInfo {
    name: string,
    image: string,
    id: string
}

const Vehicels: React.FC<VehicelsProps> = ({ setCity, setEstimates, city_id }) => {
    const navigate = useNavigate();
    const selector = useSelector((state: AppState) => state.select_city)
    const [data, setData] = useState<VehicleInfo[] | null>(null);

    const handleEvent = (item: { name: string, id: string }) => {
        navigate(`/service/${item.name}/${item.id}/${selector}/${city_id}`);
    };

    const fetchData = async () => {
        const rs = await vehicleTypes();
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='bg-white h-88 md:-mt-20 mt-5 relative z-10 md:w-[85%] md:mx-0 mx-5 border-2 border-gray-200 shadow-xl hover:shadow-xl transition-shadow duration-300 p-10 md:rounded-lg rounded-3xl'>
            <div>
                <Location setCity={setCity} />
            </div>
            <div className='flex items-center w-full justify-center gap-10'>
                <div className='flex flex-wrap justify-center  gap-10'>
                    {data?.map((item, index) => (
                        <div
                            key={index}
                            className='w-48 h-60 flex flex-col items-center bg-blue-50 gap-5 hover:cursor-pointer transition-all transform hover:scale-110 duration-500 ease-in-out'
                            onClick={() => handleEvent({ name: item.name, id: item.id })}
                        >
                            <div className='w-full h-[70%] flex items-center justify-center p-2 rounded-lg'>
                                <img
                                    className='w-full h-full'
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <h1 className="capitalize">{item?.name?.toLowerCase()}</h1>
                        </div>
                    ))}
                </div>
                {!data && <div>Loading...</div>}
                {/* <div
                    className='md:block hidden bg-blue-700 text-white font-bold w-fit h-fit font-titillium text-lg p-2 rounded-xl hover:cursor-pointer transition-all transform hover:scale-110 duration-500 ease-in-out'
                    onClick={() => setEstimates(true)}
                >
                    <FaArrowRight className='w-10 h-5' />
                </div> */}
            </div>
            <div className="md:hidden fixed bottom-10 left-1/2 transform -translate-x-1/2 font-bold font-titillium text-lg w-fit">
                <div
                    className="bg-blue-700/90 flex justify-between w-60 items-center text-white px-6 py-3 rounded-xl hover:cursor-pointer"
                    onClick={() => setEstimates(true)}
                >
                    <p className="mr-2">Get an Estimate</p>
                    <FaArrowRight className="w-5 h-5" />
                </div>
            </div>


        </div>
    );
};

export default Vehicels;
