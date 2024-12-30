import React, { useEffect } from 'react';
import banner from '../../assests/enterprice.jpg'
import FillOutUserForm from './userForm';
import About_enterprise from './information';
import Key_features from './key.features';
import TransportCities from './TransportCities';
import OurCients from './Our.clients';
import CustomersReview from './Custumore.review';
import Quary from './Quary';
import ServeIndustries from './Serve_industries';
import AskedQuestions from '../Home/AskedQuestions';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/action';

const Enterprise = () => {
    const selector = useSelector((state: AppState) => state.banners);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {Object.keys(selector).length !== 0 ?
                <div className='min-h-screen font-titillium'>
                    <div className='relative'>
                        <div className='h-[80vh] relative'>
                            <div className='absolute top-0 left-0 w-full h-full bg-black/60' />
                            <img className=' w-full h-full' src={selector.enterprise_banner} alt="" />
                        </div>
                        <div>
                            <FillOutUserForm />
                        </div>
                        <div>
                            <About_enterprise />
                        </div>
                    </div>
                    {/* <div className='mt-24 bg-black/70 text-white'>
                        <Key_features />
                    </div> */}
                    <div className='mt-24'>
                        <OurCients />
                    </div>
                    <div className='my-10'>
                        <TransportCities />
                    </div>
                    <div className='my-10'>
                        <CustomersReview />
                    </div>
                    <div className='my-10'>
                        <Quary />
                    </div>
                    <div className='my-10'>
                        <ServeIndustries />
                    </div>
                    <div className='my-10'>
                        <AskedQuestions />
                    </div>
                </div> :
                <div>
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    )
}

export default Enterprise