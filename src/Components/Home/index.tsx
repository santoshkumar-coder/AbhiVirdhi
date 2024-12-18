import React from 'react'
import CelebratingHomePage from './CelebratingHomePage'
import OurServices from './OurServices'
import OurInformation from './OurInformation'
import AskedQuestions from './AskedQuestions'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/action'

const Home: React.FC = () => {
    const selector = useSelector((state: AppState) => state.banners);

    return (<>
        {Object.keys(selector).length !== 0 ? <>
            < CelebratingHomePage />
            <OurServices />
            <OurInformation />
            <AskedQuestions />
        </> :
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        }
    </>
    )
}

export default Home