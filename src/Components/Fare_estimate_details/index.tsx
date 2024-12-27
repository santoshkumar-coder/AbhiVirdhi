import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { vehicle_Info } from '../../api_fetch/vehicle_information';

interface VehicelsInfo {
    image: string,
    name: string
    starting_price: string
    weight: string
    width: string
}

const Fare_estimate_details = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Access specific query parameters
    const brand = queryParams.get('brand');
    const customerMobile = queryParams.get('customer_mobile');
    const customerName = queryParams.get('customer_name');
    const frequency = queryParams.get('frequency');
    const to_address_landmark = queryParams.get('to_address_landmark');
    const from_address_landmark = queryParams.get('from_address_landmark');
    const vehical_info = queryParams.get('vehical_info');
    const vehical_id = queryParams.get('vehical_id');

    const [vehicalInfoData, setVehicleInfoData] = useState<VehicelsInfo[] | null>(null)

    const fetchVehicle_info = async () => {
        if (vehical_id) {
            const rs = await vehicle_Info(vehical_id);
            setVehicleInfoData(rs);
        }
    }
    useEffect(() => {
        fetchVehicle_info()
    }, [])

    return (
        <div className='min-h-screen font-titillium'>
            <h1 className='text-center py-10 text-xl font-bold'>Results - {vehical_info}</h1>
            <div className='w-full flex justify-center items-center'>
                <div className='md:w-[60%] w-[90%] mb-16 space-y-5 rounded-md shadow-[0_15px_30px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.25)] md:p-10 p-5'>
                    <div className='flex items-center py-3 rounded-md px-2 gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.5),0_2px_2px_rgba(0,0,0,0.25)]'>
                        <GoDotFill className='text-green-600' />
                        <input
                            className='w-full focus:outline-none focus:border-transparent'
                            type="text"
                            value={from_address_landmark || ''}

                        />
                        <CiEdit className='text-2xl mr-2' />
                    </div>
                    <div className='flex items-center py-3 rounded-md px-2 gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.5),0_2px_2px_rgba(0,0,0,0.25)]'>
                        <GoDotFill className='text-red-600' />
                        <input
                            className='w-full focus:outline-none focus:border-transparent'
                            type="text"
                            value={to_address_landmark || ''}

                        />
                        <CiEdit className='text-2xl mr-2' />
                    </div>

                    <div className='md:flex items-center justify-between md:px-10 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.5),0_2px_2px_rgba(0,0,0,0.25)] rounded-md'>
                        <img className='w-60 h-60' src={vehicalInfoData ? vehicalInfoData[0].image : ""} alt="" />
                        <div className='text-center'>
                            <h1 className='font-bold text-gray-700'>
                                {vehical_info}
                            </h1>
                            <h1 className='flex items-center justify-center'>
                                <p className='font-bold'>₹ {vehicalInfoData && vehicalInfoData[0].starting_price} - {" "}</p>{" "}
                                <p className='font-bold'> ₹ 170</p>
                            </h1>
                        </div>
                        <div className='flex items-center gap-2 bg-blue-300 py-1 px-2 rounded md:mt-0 mt-5 justify-center'>
                            <IoBag />
                            <p>20 Kg</p>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-5 py-5 bg-blue-100 items-center justify-between md:px-10 px-5 shadow-[0_2px_10px_rgba(0,0,0,0.5),0_2px_2px_rgba(0,0,0,0.25)] rounded-md'>
                        <h1>Love what you see? ❤️</h1>
                        <img className='w-20 h-20' src={"https://dom-website-prod-cdn-web.porter.in/public/images/fare-estimate-result/download-qr-code.png"} alt="" />
                        <h1>Scan to download our app!</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fare_estimate_details