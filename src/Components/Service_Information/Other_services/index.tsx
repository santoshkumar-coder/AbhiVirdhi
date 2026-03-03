import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VEHICLE_TYPES } from "../../../constants";
import { FaLongArrowAltRight } from "react-icons/fa";
import { vehicleTypes } from "../../../api_fetch/vehicleTypes";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/action";
interface VehicleInfo {
  name: string;
  image: string;
  id: string;
}
const Other_services = () => {
  const params = useParams();
  const [data, setData] = useState<VehicleInfo[] | null>(null);
  const selector = useSelector((state: AppState) => state.select_city);

  const navigate = useNavigate();
  const fetchData = async () => {
    const rs = await vehicleTypes();
    setData(rs);
    console.log(rs);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEvent = (item: { name: string; id: string }) => {
    navigate(`/service/${item.name}/${item.id}/${selector}/${params?.city_id}`);
  };
  return (
    <div className="flex flex-col items-center justify-center font-titillium py-10">
      <div>
        <h1 className="text-xl font-bold">Other Services to Choose From</h1>
      </div>
      <div className="md:flex md:space-y-0 space-y-5 items-center justify-center gap-10 mt-10">
        { Array.isArray(data) && data?.map((item, index) => (
          <div className="text-center ">
            {item.name !== params.serviceInformation && (
              <div className="bg-blue-50 p-2 rounded-lg">
                <img
                  className="w-48 h-32 rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
                <h1 className="mt-5">{item.name}</h1>
                <div className="text-center flex items-center justify-center mt-3">
                  <span
                    className="bg-blue-600 px-5 py-0 text-white hover:scale-110 trasition-all duration-300 ease-in-out cursor-pointer rounded-full"
                    onClick={() =>
                      handleEvent({ name: item.name, id: item.id })
                    }
                  >
                    <FaLongArrowAltRight className=" w-5 h-5" />
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Other_services;
