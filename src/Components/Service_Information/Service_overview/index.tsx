import React from 'react'
import { useParams } from 'react-router-dom'

interface CityName {
    name: string,
    image: string
}
interface ResponseData {
    data: CityName | null
}

const Service_OverView: React.FC<ResponseData> = ({ data }) => {
    const params = useParams();
    return (
        <div className='mt-5  font-titillium'>
            <div className='flex items-center justify-center'>
                <div className='md:w-[80%] md:px-0 px-5'>
                    <div>
                        <h1 className='text-2xl text-gray-800 font-bold'>Send Consignments By {params.serviceInformation} in {data?.name}</h1>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold mt-3 text-gray-700'>Pickup and Drop Consignments by {params.serviceInformation} in {data?.name}</h1>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700 mt-2 text-justify'>The economy and businesses in {data?.name} are experiencing vital growth, making efficient logistic services essential to cater to the consignment delivery requirements of its enterprises and people.</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700 mt-2 text-justify'>If you are an individual or own a business seeking a dependable Consignment delivery service, you can end your search for pickup and delivery services near me in {data?.name} with Porter. We streamline the process of sending Consignments in {data?.name}, whether gifts, documents, or groceries, by providing a swift end-to-end delivery service at budget-friendly rates.</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700 mt-2 text-justify'>You can easily book our pickup and drop Consignments in {data?.name} services to fulfill your quick delivery requirements. Rest assured, we will assign a driver-partner to collect your Consignment from your location and ensure its timely delivery.</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700 mt-2 text-justify'>Choose Porter for a convenient way to book pickup and delivery services in {data?.name}. Our services ensure your Consignments are collected and dropped off at their destinations quickly and efficiently."</p>
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold mt-3 text-gray-700'>Choose Porter for Consignment Delivery Services in {data?.name}</h1>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700 mt-2 text-justify'>Experience the ease and efficiency of Consignment delivery in {data?.name} with Porter, allowing you to save time and effort.</p>
                    </div>
                    <div className='ml-10'>
                        <div>
                            <h1 className='font-semibold mt-3 text-gray-700'>Cost-Effective:</h1>
                            <p className='text-sm text-gray-700 mt-2 text-justify'>Our Consignment delivery service allows you to send Consignments in {data?.name} at affordable rates, starting from just ₹30.</p>
                        </div>
                        <div>
                            <h1 className='font-semibold mt-3 text-gray-700'>Convenient:</h1>
                            <p className='text-sm text-gray-700 mt-2 text-justify'> Enjoy fast Consignment deliveries through the Porter app by booking a {params.serviceInformation} within minutes. Send Consignments conveniently in {data?.name} with our Consignment delivery service.</p>
                        </div>
                        <div>
                            <h1 className='font-semibold mt-3 text-gray-700'>Time-Efficient:</h1>
                            <p className='text-sm text-gray-700 mt-2 text-justify'>Save valuable time by utilizing our efficient delivery system, eliminating the need for personal drop-offs or pickups. Trust our dedicated team for timely and effective Consignment delivery in {data?.name}.</p>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-lg font-semibold mt-3 text-gray-700'>
                            How to Pickup and Drop Consignments in {data?.name}
                        </h1>
                        <p className='text-sm text-gray-700 mt-2 text-justify'>You can easily send Consignments in {data?.name} with Porter. Experience the swift Consignment delivery in {data?.name} by following the procedure below.</p>
                    </div>
                    <ol className='list-decimal ml-14'>
                        <li className='text-sm text-gray-700 mt-2 text-justify'>On the Porter app, choose Porter for Bikes to send Consignments in {data?.name}.</li>
                        <li className='text-sm text-gray-700 mt-2 text-justify'>Enter your pickup and drop address along with your contact details</li>
                        <li className='text-sm text-gray-700 mt-2 text-justify'>Add any other stops, if needed.</li>
                        <li className='text-sm text-gray-700 mt-2 text-justify'>Choose the Consignment/Consignment type if needed.</li>
                        <li className='text-sm text-gray-700 mt-2 text-justify'>Choose your payment method -Cash, Porter credit, or PayTM.</li>
                    </ol>
                    <div>
                        <h1 className='text-lg mt-3 text-gray-700'>Select Porter to avail of one the best pickup and drop Consignments in {data?.name}.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service_OverView