import React, { useEffect, useState } from "react";
import jaipurWallpaper from "../../assests/jaipur wallpaper.jpg";
import Address_Information from "./Address_Information";
import Wheeler_Information from "./wheeler_information";
import WhyChosse from "./whyChoose";
import Areas_serve from "./Areas_weserve";
import GetPhone from "./Get_phone_app";
import Other_services from "./Other_services";
import Service_OverView from "./Service_overview";
import OurOtherServices from "./OurOtherServices";
import { areas } from "../../api_fetch/cities";
import { useLocation, useParams } from "react-router-dom";
import { vehicle_Info } from "../../api_fetch/vehicle_information";

interface State {
  image: string;
  name: string;
}

interface DataItem {
  id: number;
  name: string;
}

interface ResponseData {
  state: State;
  data: DataItem[];
}

interface VehicelsInfo {
  image: string;
  name: string;
  starting_price: string;
  weight: string;
  width: string;
}

const Service_Information: React.FC = () => {
  const [data, setData] = useState<ResponseData | null>(null);
  const [vehicleLoading, setVehicleLoading] = useState(false);
  const [vehicle_InfoData, setVehicleInfoData] = useState<
    VehicelsInfo[] | null
  >(null);
  const { city_id, serviceId } = useParams<{
    city_id: string;
    serviceId: string;
  }>();

  const fetchData = async () => {
    if (city_id) {
      const cityIdNumber = parseInt(city_id, 10); // Convert string to number
      if (!isNaN(cityIdNumber)) {
        const rs = await areas(cityIdNumber);
        setData(rs);
      }
    }
  };
const fetchVehicle_info = async () => {
  if (!serviceId) return;

  try {
    setVehicleLoading(true);

    const rs = await vehicle_Info(serviceId);
    setVehicleInfoData(rs);

  } catch (err) {
    console.error(err);
  } finally {
    setVehicleLoading(false);
  }
};

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [serviceId]);

  const location = useLocation();

  useEffect(() => {
    fetchVehicle_info();
  }, [ serviceId]);

  useEffect(() => {
    fetchData();
  }, [city_id]);
  return (
    <div className="bg-gray-200">
      <div className="min-h-screen font-titillium">
        <div className="relative">
          <div className="w-full h-screen relative">
            <img
              className="w-full h-full"
              src={data?.state?.image}
              alt="jaipurWallpaper"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          </div>
          <div className="absolute md:top-32 top-10 left-0 flex justify-center flex-col items-center w-full">
            <div className="text-center w-full flex flex-col gap-5 items-center justify-center">
              <h1 className="md:text-4xl text-xl font-bold text-white md:w-1/2 md:px-0 px-5 ">
                Hassle Free Package Delivery Services in {data?.state?.name}
              </h1>
              <p className="text-white lg:text-lg font-semibold md:w-1/2 md:px-0 px-5">
                Book Abhiviridhi for all your package delivery requirements by
                bike. Enjoy reliable and safe package delivery services in{" "}
                {data?.state?.name}.
              </p>
              {/* <span className='text-white underline hover:font-bold cursor-pointer' >Know More &#8811;</span> */}
              <div className="w-full">
                <Address_Information />
              </div>
            </div>
          </div>
        </div>
      </div>
     <div>
  {vehicleLoading ? (
    <p>Loading vehicles...</p>
  ) : (
    <Wheeler_Information data={vehicle_InfoData ?? []} />
  )}
</div>
      <div>
        <WhyChosse />
      </div>
      <div>
        <Areas_serve data={data && data} />
      </div>
      <div>
        <GetPhone />
      </div>
      <div>
        <Other_services />
      </div>
      <div>
        <Service_OverView data={data?.state || { name: "", image: "" }} />
      </div>
      <div>
        <OurOtherServices />
      </div>
    </div>
  );
};

export default Service_Information;
