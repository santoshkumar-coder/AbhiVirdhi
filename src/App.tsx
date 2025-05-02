import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Components/Home";
import Service_Information from "./Components/Service_Information";
import Support from "./Components/Support";
import Enterprise from "./Components/Enterprise";
import About from "./Components/About_Us";
import { banners } from "./api_fetch/banners";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/action";
import Delivery_Partners from "./Components/Delivery_Partners";
import Insurance_FAQS from "./Components/Insurance_FAQS";
import Privacy_Policy from "./Components/Privacy_policy";
import Terms_of_service from "./Components/Terms_of_service";
import Fare_estimate_details from "./Components/Fare_estimate_details";
import Blog from "./Components/Blog";
import BlogHeader from "./Components/Blog/Blog_Header";
import Single_blog_details from "./Components/Blog/Single_blog_details";
import { FaAngleUp } from "react-icons/fa";
import useLiveLocation from "./hook/useLiveLocation";

const App: React.FC = () => {
  const { latitude, longitude, error } = useLiveLocation();
  const location = useLocation();

  useEffect(() => {
    if (latitude && longitude) {
      console.log("Live location:", latitude, longitude);
    }
    if (error) {
      console.warn("Location error:", error);
    }
  }, [latitude, longitude, error, location]);

  const dispatch = useDispatch();

  const [showTopButton, setShowTopButton] = useState(false);

  const all_banners = useSelector((state: AppState) => state.banners);

  const fetchData = async () => {
    if (Object.keys(all_banners).length === 0) {
      await banners(dispatch);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, all_banners]);

  return (
    <div>
      {location.pathname.split("/")[1] !== "blog" ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/service/:serviceInformation"
              element={<Service_Information />}
            />
            <Route
              path="/service/:serviceInformation/:serviceId/:id/:city_id"
              element={<Service_Information />}
            />
            <Route path="/support" element={<Support />} />
            <Route path="/insurance_FAQS" element={<Insurance_FAQS />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/delivery_Partners" element={<Delivery_Partners />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy_policy" element={<Privacy_Policy />} />
            <Route path="/terms_of_service" element={<Terms_of_service />} />
            <Route
              path="/fare_estimate_mob"
              element={<Fare_estimate_details />}
            />

            <Route path="/blog" element={<Fare_estimate_details />} />
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center font-bold text-xl font-titillium text-black bg-black/20">
                  404 | No Page Found
                </div>
              }
            />
          </Routes>
        </div>
      ) : (
        <div>
          <BlogHeader />
          <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:categoryId" element={<Blog />} />
            <Route
              path="/blog/:category_name/:singlePage_blog_id"
              element={<Single_blog_details />}
            />
          </Routes>
        </div>
      )}

      <Footer />

      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaAngleUp />
        </button>
      )}
    </div>
  );
};

export default App;
