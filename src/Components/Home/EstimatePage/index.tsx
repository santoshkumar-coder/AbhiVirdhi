import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/action';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { vehicleTypes } from '../../../api_fetch/vehicleTypes';
import { ImCross } from "react-icons/im";

interface EstimateProps {
    setEstimates: (estmates: boolean) => void,
}
interface VehicleInfo {
    name: string,
    image: string,
    descriptions: string,
    id: string
}

const GetEstmate: React.FC<EstimateProps> = ({ setEstimates }) => {
    const [show, setShow] = useState<boolean>(false);
    const [selectedVeical, setSelectedVeical] = useState<string>('');
    const [veicalDescription, setVicalDescription] = useState<string>('');
    const [data, setData] = useState<VehicleInfo[] | null>(null)
    const [veicalId, setVeicalId] = useState<string>('');
    const navigate = useNavigate();
    const { serviceInformation, serviceId } = useParams<{ serviceInformation: string, serviceId: string }>()
    useEffect(() => {
        setShow(true)
    }, [])

    const handleEstimateClose = (e: any) => {
        if (e.target === e.currentTarget) {
            setShow(false)
            setTimeout(() => {
                setEstimates(false)
            }, 700);
        }
    }

    useEffect(() => {
        if (serviceInformation || serviceId) {
            setSelectedVeical(serviceInformation || "")
        }
    }, [serviceInformation, serviceId])

    const selector = useSelector((state: AppState) => state);
    const [formData, setFormData] = useState({ pickupAddress: '', dropAddress: '', phoneNumber: '', name: '', business: '' });
    const [touched, setTouched] = useState({ pickupAddress: false, dropAddress: false, phoneNumber: false, name: false });

    const [selectBusinessDrop, setSelectBusinessDrop] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (field: string) => {
        setTouched({ ...touched, [field]: true });
    };

    const handleBlur = (field: string) => {
        setTouched({ ...touched, [field]: true });
    };

    const fetchData = async () => {
        const rs = await vehicleTypes();
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams({
            brand: 'porter',
            customer_mobile: formData.phoneNumber,
            customer_name: formData.name,
            frequency: formData.business,
            from_address_landmark: formData.pickupAddress,
            from_address_lat: '28.637189',
            from_address_long: '77.2756522',
            geo_region_id: '2',
            to_address_landmark: formData.dropAddress,
            to_address_lat: '28.6505331',
            to_address_long: '77.23033699999999',
            vehical_info: selectedVeical,
            vehical_id: veicalId
            // fare_estimate_token: 'your_fare_estimate_token',
        });

        navigate(`/fare_estimate_mob?${params.toString()}`);
    }
    return (
        <div className='fixed top-0 w-full font-titillium h-screen bg-black bg-opacity-80 z-20 md:flex justify-between items-center'
            onClick={(e) => handleEstimateClose(e)}
        >
            <div
                className={`relative md:w-1/4 md:h-screen h-1/3 bg-gray-200 text-gray-800 transform transition-all duration-700 ${show ? "md:translate-x-0 translate-y-0 opacity-100" : "md:-translate-x-full -translate-y-full opacity-0"
                    }`}
            >
                <div className='absolute md:hidden right-3 top-2 text-3xl bg-black text-white rounded-full flex justify-center items-center p-3'
                    onClick={(e) => handleEstimateClose(e)}
                >
                    <ImCross className='w-4 h-4'/>
                </div>

                <div className='md:py-20 py-10 md:px-10 px-5'>
                    {!selectedVeical &&
                        <h1 className='text-4xl font-bold '>
                            Get an Estimate
                        </h1>
                    }
                    {selectedVeical === "Two Wheeler" &&
                        <h1 className='text-4xl font-bold '>
                            Two Wheeler
                        </h1>
                    }
                    {selectedVeical === "Mini Trucks" &&
                        <h1 className='text-4xl font-bold '>
                            Mini Trucks
                        </h1>
                    }
                    {selectedVeical === "Three Wheeler" &&
                        <h1 className='text-4xl font-bold '>
                            Three Wheeler
                        </h1>
                    }
                    {selectedVeical === "Large Trucks" &&
                        <h1 className='text-4xl font-bold '>
                            Large Trucks
                        </h1>
                    }

                    <p className='py-10 text-base text-justify'>{veicalDescription ? veicalDescription : "Please fill in the details, so we can provide you with the best of our services"}</p>
                </div>
            </div>
            <div
                className={`md:w-2/5 md:h-screen h-2/3 bg-white transition-all duration-700 transform ${show ? "md:translate-x-0 translate-y-0 opacity-100" : "md:translate-x-full translate-y-full opacity-0"
                    }`}
            >
                <div className='md:py-20 py-5 px-3 '>
                    {!selectedVeical ? <div>
                        {data?.map((item, index) => (
                            <div className='h-20 rounded-xl mt-5 flex border-2 border-gray-400 hover:border-blue-700 text-gray-800 hover:text-blue-500 cursor-pointer select-none px-2 items-center justify-between'
                                onClick={() => {
                                    setSelectedVeical(item.name)
                                    setVicalDescription(item.descriptions)
                                    setVeicalId(item.id)
                                }}
                                key={index}
                            >
                                <img className='h-16 w-20 rounded-xl' src={item.image} alt="two wheeler" />
                                <h1>{item.name}</h1>
                                <FaAngleRight />

                            </div>
                        ))}
                        <div>

                            {/* <div className='h-20 rounded-xl mt-5 flex border-2 border-gray-400 hover:border-blue-700 text-gray-800 hover:text-blue-500 cursor-pointer select-none px-2 items-center justify-between'
                                onClick={() => setSelectedVeical("Three Wheeler")}
                            >
                                <img className='h-16 w-20 rounded-xl' src={threeWheeler} alt="two wheeler" />
                                <h1>Three Wheelers</h1>
                                <FaAngleRight />

                            </div>
                            <div className='h-20 rounded-xl mt-5 flex border-2 border-gray-400 hover:border-blue-700 text-gray-800 hover:text-blue-500 cursor-pointer select-none px-2 items-center justify-between'
                                onClick={() => setSelectedVeical("Mini Trucks")}
                            >
                                <img className='h-16 w-20 rounded-xl' src={miniTruck} alt="two wheeler" />
                                <h1>Mini Trucks</h1>
                                <FaAngleRight />

                            </div>
                            <div className='h-20 rounded-xl mt-5 flex border-2 border-gray-400 hover:border-blue-700 text-gray-800 hover:text-blue-500 cursor-pointer select-none px-2 items-center justify-between'
                                onClick={() => setSelectedVeical("Large Trucks")}
                            >
                                <img className='h-16 w-20 rounded-xl' src={largeTruck} alt="two wheeler" />
                                <h1>Large Trucks</h1>
                                <FaAngleRight />

                            </div> */}
                        </div>
                    </div>
                        :
                        <div className='overflow-y-auto h-[60vh] md:h-auto'>
                            {(!serviceInformation || !serviceId) &&
                                <div className='px-5 select-none'>
                                    <div className='flex justify-between items-center border-2 border-gray-200 py-2 px-5 rounded-lg'>
                                        <h1 className='font-semibold'>{selectedVeical}</h1>
                                        <p className='font-semibold text-blue-500 text-sm cursor-pointer hover:text-blue-700'
                                            onClick={() => {
                                                setSelectedVeical('')
                                                setVicalDescription('')
                                            }}
                                        >Change</p>
                                    </div>
                                </div>
                            }

                            <form className='flex flex-col bg-white items-center px-5 py-8 rounded-r-xl rounded-bl-xl gap-3 w-auto'
                                onSubmit={(e) => handleSubmit(e)}
                            >
                                <div className='flex flex-col items-start justify-start border-2 border-gray-200 w-full py-1 px-2 rounded-lg'>
                                    <label htmlFor="pickupaddress" className=' text-sm'>Pickup Address<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                                    <input
                                        className="border-none w-full focus:outline-none focus:border-transparent text-sm"
                                        type="text"
                                        name="pickupAddress"
                                        value={formData.pickupAddress}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('pickupAddress')}
                                        onBlur={() => handleBlur('pickupAddress')}
                                        placeholder='Sending from'
                                    />
                                    {touched.pickupAddress && !formData.pickupAddress && (
                                        <p className="text-xs text-red-500 mt-1">Enter Pickup Address</p>
                                    )}
                                </div>

                                <div className='flex flex-col items-start justify-start border-2 border-gray-200 w-full py-1 px-2 rounded-lg'>
                                    <label htmlFor="dropaddress" className=' text-sm'>Drop Address<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                                    <input
                                        className="border-none w-full focus:outline-none focus:border-transparent text-sm"
                                        type="text"
                                        name="dropAddress"
                                        value={formData.dropAddress}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('dropAddress')}
                                        onBlur={() => handleBlur('dropAddress')}
                                        placeholder='Sending to'
                                    />
                                    {touched.dropAddress && !formData.dropAddress && (
                                        <p className="text-xs text-red-500 mt-1">Enter Drop Address</p>
                                    )}
                                </div>

                                <div className='flex flex-col items-start justify-start border-2 border-gray-200 w-full py-1 px-2 rounded-lg'>
                                    <label htmlFor="name" className=' text-sm'>Sender name<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                                    <input
                                        className="border-none w-full text-sm focus:outline-none focus:border-transparent"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={() => handleBlur('name')}
                                        placeholder='Enter your name'
                                    />
                                    {touched.name && !formData.name && (
                                        <p className="text-xs text-red-500 mt-1">Enter your Name</p>
                                    )}
                                </div>

                                <div className='flex flex-col items-start justify-start border-2 border-gray-200 w-full py-1 px-2 rounded-lg'>
                                    <label htmlFor="phoneNumber" className=' text-sm'>Sender phone Number<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                                    <input
                                        className="border-none w-full focus:outline-none focus:border-transparent text-sm w-full caret-white"
                                        type="number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('phoneNumber')}
                                        onBlur={() => handleBlur('phoneNumber')}
                                        placeholder='Enter contact details'
                                    />
                                    {touched.phoneNumber && !formData.phoneNumber && (
                                        <p className="text-xs text-red-500 mt-1">Enter Phone Number</p>
                                    )}
                                </div>



                                <div className='relativ  w-full'>
                                    <div className='flex flex-col items-start justify-start cursor-pointer w-full py-1 px-2'
                                        onClick={() => setSelectBusinessDrop(!selectBusinessDrop)}
                                    >
                                        <label
                                            htmlFor="bussesniss"
                                            className='flex items-center justify-center cursor-pointer text-sm'>
                                            What describes you best?
                                            <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span>
                                        </label>
                                        <div className='flex items-center justify-between w-full gap-2 mt-2'>
                                            <p className={`w-full bg-gray-200 py-1 font-bold text-center rounded-lg ${formData.business === "personal user" ? "bg-red-800 text-white" : "bg-gray-200"}`}
                                                onClick={() => {
                                                    setFormData({ ...formData, business: "personal user" })
                                                }}
                                            >Personal User</p>
                                            <p className={`w-full bg-gray-200 py-1 font-bold  text-center rounded-lg ${formData.business === "business user" ? "bg-red-800 text-white" : "bg-gray-200"}`}
                                                onClick={() => {
                                                    setFormData({ ...formData, business: "business user" })
                                                }}
                                            >Business User</p>
                                        </div>
                                    </div>

                                </div>

                                <button className={`w-full flex items-center justify-between mt-5 gap-10  select-none cursor-pointer p-3 rounded-lg text-white  ml-3 text-sm ${(formData.business && formData.dropAddress && formData.name && formData.phoneNumber && formData.pickupAddress) ? "hover:text-white/80 bg-blue-600 hover:bg-blue-800 hover:scale-105 trasition-all ease-in duration-300" : "bg-gray-400"} pr-10`}
                                    disabled={!formData.business && !formData.dropAddress && !formData.name && !formData.phoneNumber && !formData.pickupAddress}
                                >
                                    <span>Get an estimate</span>
                                    <span><FaLongArrowAltRight /></span>
                                </button>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GetEstmate