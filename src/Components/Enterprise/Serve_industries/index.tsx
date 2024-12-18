import React from 'react'

const ServeIndustries = () => {
    return (
        <div className='flex flex-col justify-center w-full items-center gap-10'>
            <h1 className='font-bold text-xl'>INDUSTRIES WE SERVE</h1>
            <div className='w-[70%] text-center flex flex-col justify-center items-center'>
                <p className='text-xl w-[80%] text-gray-600'>The expertise and experience we have in handling a wide range of goods make us the most efficient and competent logistics partner for small to large enterprise! We transport anything and everything ranging from agricultural goods, FMCG, electronic appliances, pharmacy and medical supplies, bulk couriers, business parcels. Other goods we transport include frozen and processed foods, Ecommerce related merchandise and electronic goods.</p>
                <div className='flex w-full justify-between items-center mt-20'>
                    <div
                        className="bg-[url('https://dom-website-prod-cdn-cms.porter.in/enterprise_business_img_e76c0a2f4c.webp')] bg-no-repeat bg-cover w-60 h-60" />
                    <div className="transform rotate-0 skew-x-[-7deg] translate-x-0 w-[45%]">
                        <div className='flex text-white'>
                            <h1 className="bg-blue-500 p-2 border-b-2 border-r-2 border-r-white/80 border-b-white w-[40%] text-end">ELECTRONICS & APPLIANCES</h1>
                            <h1 className='bg-blue-800 p-2 border-b-2 border-white/80 w-[40%] text-start border-sm border-b-white'>FURNITURES</h1>
                        </div>
                        <div className='flex  text-white '>
                            <h1 className="bg-blue-500 p-2 border-b-2 border-r-2 border-r-white/80 border-b-white w-[40%] text-end">CHEMICALS & PHARMACEUTICALS</h1>
                            <h1 className='bg-blue-800 p-2 border-b-2 border-white/80 w-[40%] text-start border-sm border-b-white'>CONSTRUCTION MATERIALS</h1>
                        </div>
                        <div className='flex  text-white '>
                            <h1 className="bg-blue-500 p-2 border-b-2 border-r-2 border-r-white/80 border-b-white w-[40%] text-end">F&Vs & PROCESSED FOODS</h1>
                            <h1 className='bg-blue-800 p-2 border-b-2 border-white/80 w-[40%] text-start border-sm border-b-white'>E-COMMERCE</h1>
                        </div>
                        <div className='flex text-white'>
                            <h1 className='bg-blue-500 p-2 border-r-2 border-white/80 w-[40%] text-end border-sm border-b-white'>COURIERS & LOGISTICS</h1>
                            <h1 className="bg-blue-800 w-[40%] text-start p-2">FMCG</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServeIndustries