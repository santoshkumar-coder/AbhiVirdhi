import React from 'react'

interface porterAdvantage {
    image: string,
    topic: string,
    description: string
}

interface Advantage {
    data?: { Porter_advantage: porterAdvantage[] }
}

const Advantage: React.FC<Advantage> = ({ data }) => {
    return (
        <div className='md:p-10 p-5'>
            <h1 className='text-center pb-10 font-bold text-xl' >PORTER ADVANTAGE</h1>
            <div className="md:flex items-center justify-center gap-5">
                {data?.Porter_advantage.map((item, index) => {
                    return (
                        <div className="flex flex-col h-72 items-center md:mt-auto mt-10 max-w-sm p-3 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.5),0_-4px_8px_rgba(0,0,0,0.2)]">
                            <img
                                src={item.image}
                                alt="Card Image"
                                className="mb-4 w-32 h-32 rounded-full object-cover"
                            />
                            <h2 className="mb-2 text-xl font-semibold text-gray-800">{item.topic}</h2>
                            <p className="text-center text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    )
                })}

                {/* <div className="flex flex-col items-center max-w-sm p-3 bg-white rounded-lg shadow-md">
                    <img
                        src="https://dom-website-prod-cdn-cms.porter.in/feature_1_f7b50fede5.png"
                        alt="Card Image"
                        className="mb-4 w-32 h-32 rounded-full object-cover"
                    />
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">Card Heading</h2>
                    <p className="text-center text-gray-600">
                        This is a description of the card content. It is centered and aligned
                        perfectly for readability and design aesthetics.
                    </p>
                </div>
                <div className="flex flex-col items-center max-w-sm p-3 bg-white rounded-lg shadow-md">
                    <img
                        src="https://dom-website-prod-cdn-cms.porter.in/feature_1_f7b50fede5.png"
                        alt="Card Image"
                        className="mb-4 w-32 h-32 rounded-full object-cover"
                    />
                    <h2 className="mb-2 text-xl font-semibold text-gray-800">Card Heading</h2>
                    <p className="text-center text-gray-600">
                        This is a description of the card content. It is centered and aligned
                        perfectly for readability and design aesthetics.
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Advantage