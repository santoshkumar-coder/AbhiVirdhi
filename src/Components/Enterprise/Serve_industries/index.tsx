import React from 'react'

const ServeIndustries = () => {
    return (
        <div className='flex flex-col justify-center w-full items-center gap-10 md:px-0 px-3'>
            <h1 className='font-bold text-xl'>INDUSTRIES WE SERVE</h1>
            <div className='md:w-[70%] text-center flex flex-col justify-center items-center'>
                <p className='text-xl md:w-[80%] w-[90%] text-gray-600 md:text-center text-start'>The expertise and experience we have in handling a wide range of goods make us the most efficient and competent logistics partner for small to large enterprise! We transport anything and everything ranging from agricultural goods, FMCG, electronic appliances, pharmacy and medical supplies, bulk couriers, business parcels. Other goods we transport include frozen and processed foods, Ecommerce related merchandise and electronic goods.</p>
                <div className='flex w-full md:justify-between justify-around items-center mt-20'>
                    <div
                        className="bg-[url('https://dom-website-prod-cdn-cms.porter.in/enterprise_business_img_e76c0a2f4c.webp')] bg-no-repeat bg-cover md:w-60 w-28 h-60 object-fit" />
                    <div className="transform rotate-0 skew-x-[-7deg] translate-x-0 md:w-[45%] w-[58%]">
                        <div className='flex text-white'>
                            <h1 className="bg-blue-500 p-2 border-b-2 border-r-2 border-r-white/80 border-b-white w-[40%] text-end text-xs">ELECTRONICS & APPLIANCES</h1>
                            <h1 className='bg-blue-800 p-2 border-b-2 border-white/80 w-[40%] text-start border-sm border-b-white text-xs'>FURNITURES</h1>
                        </div>
                        <div className='flex  text-white '>
                            <h1 className="bg-blue-500 p-2 border-b-2 border-r-2 border-r-white/80 border-b-white w-[40%] text-end text-xs">CHEMICALS & PHARMACEUTICALS</h1>
                            <h1 className='bg-blue-800 p-2 border-b-2 border-white/80 w-[40%] text-start border-sm border-b-white text-xs'>CONSTRUCTION MATERIALS</h1>
                        </div>
                        <div className='flex  text-white '>
                            <h1 className="bg-blue-500 p-2 border-b-2 border-r-2 border-r-white/80 border-b-white w-[40%] text-end text-xs">F&Vs & PROCESSED FOODS</h1>
                            <h1 className='bg-blue-800 p-2 border-b-2 border-white/80 w-[40%] text-start border-sm border-b-white text-xs'>E-COMMERCE</h1>
                        </div>
                        <div className='flex text-white'>
                            <h1 className='bg-blue-500 p-2 border-r-2 border-white/80 w-[40%] text-end border-sm border-b-white text-xs'>COURIERS & LOGISTICS</h1>
                            <h1 className="bg-blue-800 w-[40%] text-start p-2 text-xs">FMCG</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServeIndustries