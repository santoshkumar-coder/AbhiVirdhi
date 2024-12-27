import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { VscTriangleDown } from "react-icons/vsc";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/action';
import Cities from '../../Home/VehiclesDisplay/Cities';

const Address_Information: React.FC = () => {
    const { serviceId, serviceInformation } = useParams<{ serviceInformation: string, serviceId: string }>();
    const navigate = useNavigate();
    const selector = useSelector((state: AppState) => state);
    const [city, setCity] = useState<boolean>(false);
    const [city_id, setCity_Id] = useState<number>(-1);

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
            vehical_info: serviceInformation || "",
            vehical_id: serviceId || ""
            // fare_estimate_token: 'your_fare_estimate_token',
        });

        navigate(`/fare_estimate_mob?${params.toString()}`);
    }

    return (
        <div className='w-full font-titillium'>
            <div className='flex flex-col justify-center items-center'>
                <div className='md:w-auto w-[80%]'>
                    <div
                        className='flex items-center bg-white py-4 mb-1 px-3 gap-2 w-fit rounded-t-xl cursor-pointer'
                        onClick={() => setCity(true)}
                    >
                        <MdLocationPin />
                        <span>{selector.select_city}</span>
                        <VscTriangleDown />
                    </div>

                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        className='md:flex md:w-auto w-full bg-white items-center px-5 py-8 rounded-r-xl rounded-bl-xl gap-3 w-auto'>
                        <div className='flex flex-col items-start justify-start'>
                            <label htmlFor="pickupaddress" className=' text-sm'>Pickup Address<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                            <input
                                className="border-none focus:outline-none focus:border-transparent text-sm md:w-auto w-full"
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

                        <div className='flex flex-col items-start justify-start'>
                            <label htmlFor="dropaddress" className=' text-sm'>Drop Address<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                            <input
                                className="border-none focus:outline-none focus:border-transparent text-sm md:w-auto w-full"
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

                        <div className='flex flex-col items-start justify-start'>
                            <label htmlFor="phoneNumber" className=' text-sm'>Sender Phone Number<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                            <input
                                className="border-none focus:outline-none focus:border-transparent text-sm md:w-auto w-full"
                                type="text"
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

                        <div className='flex flex-col items-start justify-start'>
                            <label htmlFor="name" className=' text-sm'>Sender Name<span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span></label>
                            <input
                                className="border-none text-sm focus:outline-none focus:border-transparent md:w-auto w-full"
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

                        <div className='relative md:mt-0 mt-3'>
                            <div className='flex flex-col items-start justify-start cursor-pointer'
                                onClick={() => setSelectBusinessDrop(!selectBusinessDrop)}
                            >
                                <label
                                    htmlFor="bussesniss"
                                    className='flex items-center justify-center cursor-pointer text-sm'>
                                    What describes you best?
                                    <span className="text-red-500 ml-1 -mt-2 font-bold text-lg">*</span>
                                    <span className='ml-5'><VscTriangleDown /></span>
                                </label>
                                <input
                                    className="border-none bg-transparent capitalize text-sm focus:outline-none focus:border-transparent cursor-pointer"
                                    type="text"
                                    placeholder='Enter your name'
                                    disabled
                                    value={formData.business}
                                />
                            </div>
                            {selectBusinessDrop &&
                                <div className='absolute top-14 bg-gray-100 shadow-lg hover:shadow-xl p-3 rounded-xl'>
                                    <h1 className='hover:bg-gray-300 font-bold p-2 text-sm cursor-pointer rounded-lg'
                                        onClick={() => {
                                            setFormData({ ...formData, business: "personal user" })
                                            setSelectBusinessDrop(false);
                                        }}
                                    >Personal User</h1>
                                    <h1 className='mt-2 hover:bg-gray-300 font-bold p-2 text-sm cursor-pointer rounded-lg'
                                        onClick={() => {
                                            setFormData({ ...formData, business: "business user" })
                                            setSelectBusinessDrop(false);
                                        }}
                                    >Business User</h1>
                                </div>
                            }
                        </div>

                        <button
                            disabled={!formData.business && !formData.dropAddress && !formData.name && !formData.phoneNumber && !formData.pickupAddress}
                            className={`
                                ${(formData.business && formData.dropAddress && formData.name && formData.phoneNumber && formData.pickupAddress) ? "hover:text-white/80 bg-blue-600 hover:bg-blue-800 hover:scale-105 trasition-all ease-in duration-300" : "bg-gray-400"}
                            flex justify-between md:mt-0 mt-10 items-center gap-10 bg-blue-600 select-none cursor-pointer p-3 rounded-lg text-white   ml-3 text-sm `}>
                            <span>Get an estimate</span>
                            <span><FaLongArrowAltRight /></span>
                        </button>
                    </form>
                </div>
            </div >
            <div>
                {city &&
                    <Cities setCity={setCity} setCity_Id={setCity_Id} />
                }
            </div>
        </div >
    )
}

export default Address_Information;
