import React, { useEffect } from 'react'
import CustumorSupport from './CustumorSupport'
import OurOffices from './Offices'

const Support: React.FC = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
    }, [])
    return (
        <div className='font-titillium'>
            <CustumorSupport />
            <OurOffices />
        </div>
    )
}

export default Support