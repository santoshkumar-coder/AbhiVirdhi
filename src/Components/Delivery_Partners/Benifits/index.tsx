import React from 'react'

interface Benifits {
    image: string,
    topic: string,
    description: string,
}

interface Benifits_prop {
    data?: { Benifits: Benifits[] }
}

const Benifits: React.FC<Benifits_prop> = ({ data }) => {
    return (
        <div className='md:p-10 p-5'>
            <h1 className='text-center font-bold text-2xl md:p-10 py-10'>ADDITIONAL BENEFITS</h1>
            <div className="md:flex items-center justify-center gap-5">
                {data?.Benifits.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col w-full md:mt-auto mt-10 md:w-1/4 h-72 items-center max-w-sm p-3 bg-white rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.5),0_-4px_8px_rgba(0,0,0,0.2)]">
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
            </div>
        </div>
    )
}

export default Benifits