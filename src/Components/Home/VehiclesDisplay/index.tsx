import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Location from "./Location";
import { useNavigate } from "react-router-dom";
import { VEHICLE_TYPES } from "../../../constants";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/action";
import { vehicleTypes } from "../../../api_fetch/vehicleTypes";

interface VehicelsProps {
  setCity: (city: boolean) => void;
  setEstimates: (estimates: boolean) => void;
  city_id: number;
}

interface VehicleInfo {
  name: string;
  image: string;
  id: string;
}

const Vehicels: React.FC<VehicelsProps> = ({
  setCity,
  setEstimates,
  city_id
}) => {
  const navigate = useNavigate();
  const selector = useSelector((state: AppState) => state.select_city);
  const [data, setData] = useState<VehicleInfo[] | null>(null);

  const handleEvent = (item: { name: string; id: string }) => {
    navigate(`/service/${item.name}/${item.id}/${selector}/${city_id}`);
    window.location.reload();
  };

  const fetchData = async () => {
    const rs = await vehicleTypes();
    setData(rs);
  };

  const [visiableEstimate, setVisiableEstimete] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setVisiableEstimete(true);
    } else {
      setVisiableEstimete(false);
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-[#cbe3f1]/60
        shadow-[0_4px_8px_rgba(0,0,0,0.5),0_-4px_8px_rgba(0,0,0,0.2)]
        h-fit relative z-10 md:w-[60%] md:mx-0 mx-5 border-2 border-gray-200 shadow-xl hover:shadow-xl transition-shadow duration-300 md:p-8 p-5 md:rounded-lg rounded-3xl"
    >
      <div>
        <Location setCity={setCity} />
      </div>
      <div className="flex items-center w-full justify-center -mt-5">
        <div className="flex flex-wrap justify-center md:gap-10 gap-5">
          {data?.map((item, index) => (
            <div
              key={index}
              className="md:w-40 md:h-40 w-32 h-32 flex flex-col items-center bg-white/80 md:rounded-tl-[3rem] rounded-tl-[2rem] md:rounded-br-[3rem] rounded-br-[2rem] p-5 hover:cursor-pointer transition-all transform hover:scale-110 duration-500 ease-in-out"
              onClick={() => handleEvent({ name: item.name, id: item.id })}
            >
              <div className="w-full h-[70%] flex items-center justify-center p-2 rounded-lg">
                <img
                  className="w-full h-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h1 className="capitalize text-xs md:text-base">
                {item?.name?.toLowerCase()}
              </h1>
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
      {visiableEstimate && (
        <div
          className={`md:block hidden fixed top-5 right-5 transform font-bold font-titillium text-lg w-fit ${
            !visiableEstimate ? "animate-bump-out" : "animate-bump"
          }`}
        >
          <button
            className="bg-blue-700/90 flex justify-between w-60 items-center text-white px-6 py-3 rounded-xl hover:cursor-pointer hover:bg-blue-800 transition-all"
            onClick={() => setEstimates(true)}
            aria-label="Get an Estimate"
          >
            <span className="mr-2">Get an Estimate</span>
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Vehicels;
