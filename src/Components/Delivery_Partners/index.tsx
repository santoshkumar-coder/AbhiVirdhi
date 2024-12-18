import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/action'

const Delivery_Partners: React.FC = () => {
    const selector = useSelector((state: AppState) => state.banners)
    return (
        <div>
            {Object.keys(selector).length !== 0 ?
                <div className='min-h-screen font-titillium'>
                    <div className='relative h-screen'>
                        <div className='h-[70%]'>
                            <img
                                className="w-full h-full object-cover right-20"
                                src={selector.delivery_banner}
                                style={{
                                    backgroundPosition: "50%",
                                    filter: "unset",
                                    maxWidth: "unset",
                                }}
                                alt=""
                            />
                        </div>
                    </div>
                </div> : <div>Loading</div>}
        </div>
    )
}

export default Delivery_Partners