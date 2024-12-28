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
                <div className=' w-screen h-screen bg-[#b1d3e5]'>
                    <img
                        alt="10-year logo"
                        sizes="100vw"
                        srcSet={selector.home_banner}
                        // src='https://image.slidesdocs.com/responsive-images/background/courier-speed-delivery-orange-simple-life-service-poster-powerpoint-background_dbdf628fff__960_540.jpg'
                        // src='https://img.freepik.com/premium-photo/red-toy-car-with-box-back-it_950347-2193.jpg'
                        // src='https://static.vecteezy.com/system/resources/thumbnails/046/960/165/small_2x/3d-render-of-brown-cardboard-boxes-parcel-with-truck-for-mock-up-and-creative-design-shopping-online-concept-online-delivery-concept-with-pastel-background-photo.jpeg'
                        // src="https://www.shutterstock.com/image-vector/white-truck-box-path-tracking-600nw-2490530993.jpg"
                        className="md:block hidden"
                    />
                </div>
                {/* <div className="absolute inset-0 flex items-center justify-center max-h-64">
                    <img
                        className="w-[60vw] max-h-96"
                        src={selector.home_text_banner}
                        alt="celebrate"
                    />
                </div> */}

            </div>
            <div className='absolute top-32 left-0 md:left-10'>
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