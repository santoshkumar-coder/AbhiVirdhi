import React, { useState } from 'react'
import celebrate from '../../../assests/10_year_5991a185c9_reduced_size_119kb_baa0f89e2c.gif';
import yearBanner from '../../../assests/10-year-banner.svg'
import GetEstmate from '../EstimatePage';
import Vehicels from '../VehiclesDisplay';
import Cities from '../VehiclesDisplay/Cities';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/action';
const CelebratingHomePage: React.FC = () => {
    const [city, setCity] = useState<boolean>(false);
    const [estimates, setEstimates] = useState<boolean>(false);
    const [city_id, setCity_Id] = useState<number>(1);

    const selector = useSelector((state: AppState) => state.banners);
    console.log("banners->", selector?.home_banner);

    return (
        <div>
            <div className="relative text-center">
                <div>
                    <img
                        alt="10-year logo"
                        sizes="100vw"
                        srcSet={selector.home_banner}
                        className="w-screen max-h-96"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center max-h-64">
                    <img
                        className="w-[60vw] max-h-96"
                        src={selector.home_text_banner}
                        alt="celebrate"
                    />
                </div>
                <div className='absolute inset-0 text-white md:flex hidden items-end justify-center md:max-h-72 max-h-60'>
                    <button className='bg-white font-semibold text-gray-800 p-2 rounded-xl'>Ready our story</button>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Vehicels setCity={setCity} setEstimates={setEstimates} city_id={city_id} />
            </div>
            <div>
                {city &&
                    <Cities setCity={setCity} setCity_Id={setCity_Id} />
                }
            </div>
            {estimates &&
                <div>
                    <GetEstmate setEstimates={setEstimates} />
                </div>}
        </div>
    )
}

export default CelebratingHomePage