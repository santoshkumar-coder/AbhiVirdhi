import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
import Service_Information from './Components/Service_Information';
import Support from './Components/Support';
import Enterprise from './Components/Enterprise';
import About from './Components/About_Us';
import { banners } from './api_fetch/banners';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './redux/action';
import Delivery_Partners from './Components/Delivery_Partners';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const all_banners = useSelector((state: AppState) => state.banners);

  // API call to fetch banners
  const fetchData = async () => {
    if (Object.keys(all_banners).length === 0) {  // Check if banners are not already fetched
      await banners(dispatch);
    }
  }

  useEffect(() => {
    fetchData();  // Call fetchData once when the component mounts
  }, [dispatch, all_banners]);  // Only run effect when dispatch changes or all_banners is empty

  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceInformation" element={<Service_Information />} />
        <Route path="/service/:serviceInformation/:id/:city_id" element={<Service_Information />} />
        <Route path="/support" element={<Support />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/delivery_Partners" element={<Delivery_Partners />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<div className='min-h-screen flex items-center justify-center font-bold text-xl font-titillium text-black bg-black/20'>404 | No Page Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
