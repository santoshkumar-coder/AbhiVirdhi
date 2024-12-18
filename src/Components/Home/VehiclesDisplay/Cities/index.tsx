import React, { useState, useEffect } from 'react';
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { SELECTED_CITY } from '../../../../redux/action';
import { cities } from '../../../../api_fetch/cities';
import { useNavigate, useParams } from 'react-router-dom';

interface CitiesProps {
    setCity: (city: boolean) => void;
    setCity_Id: (city_id: number) => void
}
interface Cities {
    image: string,
    name: string,
    id: number
}

const Cities: React.FC<CitiesProps> = ({ setCity, setCity_Id }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { city_id, serviceInformation } = useParams<{ city_id: string, serviceInformation: string }>();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [data, setData] = useState<Cities[] | null>(null);

    const fetchData = async () => {
        const rs = await cities();
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const closeModal = () => {
        setIsVisible(false); // Hide the modal with a smooth transition
        setTimeout(() => {
            setCity(false); // Trigger the callback after the animation finishes
        }, 700); // Timeout duration matches the transition duration
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("overflow-hidden")
        }
        else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [isVisible])

    return (
        <div
            className='fixed top-0 w-full h-screen bg-black bg-opacity-50 z-20 flex justify-center items-center'
            onClick={handleBackgroundClick}
        >
            <div
                className={`w-[75%] h-[99vh] bg-white overflow-y-auto px-16 relative transition-all duration-700 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className='absolute top-3 right-5'>
                    <ImCross
                        className='cursor-pointer text-gray-500 hover:text-gray-800'
                        onClick={closeModal} // Close the modal with transition
                    />
                </div>
                <h1 className='font-titillium text-center font-bold text-4xl p-5 text-black'>
                    Choose Your City
                </h1>

                <div className='flex flex-wrap gap-10 justify-center mt-10'>
                    {data?.map((item, index) => (
                        <div key={index} className='flex flex-col justify-center items-center cursor-pointer hover:scale-150 trasition-all duration-700'
                            onClick={() => {
                                dispatch({
                                    type: SELECTED_CITY,
                                    payload: item.name
                                })
                                setCity_Id(item.id)
                                if (city_id) {
                                    navigate(`/service/${serviceInformation}/${item.name}/${item.id}`)
                                }
                                closeModal();
                            }}
                        >
                            <img
                                className='w-24 h-24 rounded-xl bg-blue-100 object-cover'
                                src={item?.image}
                                alt={item?.name}
                            />
                            <h1>{item?.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cities;
