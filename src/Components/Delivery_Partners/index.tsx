import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/action';
import Add_vehicle from './Add_vehicle';
import Add_vehicle_form from './Add_cehicle_Form';
import Advantage from './Advantage';
import { Delviery_Partners } from '../../api_fetch/delivery_partners';
import MakeLifeEasy from './Make_Life_Easy';
import AskedQuestions from '../Home/AskedQuestions';
import MultipleVehicles from './Multiple_vehicles';
import Benifits from './Benifits';



interface DeliveryPartners {
    making_life_easy_description: string;
    making_life_easy_image: string;
    own_multiple_vehicle_image: string;
    porter_advantage: [],
    benefits: []
}

const Delivery_Partners: React.FC = () => {
    const [data, setData] = useState<DeliveryPartners | null>(null);

    const selector = useSelector((state: AppState) => state.banners);

    const fetch = async () => {
        const rs = await Delviery_Partners();
        console.log('delivery ->', rs);
        setData(rs);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div>
            {Object.keys(selector).length !== 0 ? (
                <div className="min-h-screen font-titillium">
                    <div className="h-screen">
                        <div className="relative h-[80%]">
                            <img
                                className="w-full h-full object-cover transform scale-x-[-1]"
                                src={selector.delivery_banner}
                                style={{
                                    backgroundPosition: '100%',
                                    filter: 'unset',
                                    maxWidth: 'unset',
                                }}
                                alt=""
                            />
                            {/* Center the Add_vehicle_form */}
                            <div className="absolute inset-0 flex md:items-center md:justify-center justify-center md:mt-auto mt-10 md:h-auto h-fit">
                                <Add_vehicle_form />
                            </div>
                            <Add_vehicle />
                        </div>
                    </div>
                    <div>
                        <Advantage data={data ? { Porter_advantage: data.porter_advantage } : undefined} />
                    </div>
                    <div>
                        <MakeLifeEasy
                            data={
                                data
                                    ? {
                                        making_life_easy_description: data.making_life_easy_description,
                                        making_life_easy_image: data.making_life_easy_image,
                                    }
                                    : undefined
                            }
                        />
                    </div>
                    <div>
                        <MultipleVehicles
                            data={
                                data
                                    ? {
                                        own_multiple_vehicle_image: data.own_multiple_vehicle_image
                                    }
                                    : undefined
                            }
                        />
                    </div>
                    <div>
                        <Benifits data={data ? { Benifits: data.benefits } : undefined} />


                    </div>
                    <div>
                        <AskedQuestions />
                    </div>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};

export default Delivery_Partners;
