import React, { useEffect, useState } from "react";
import banner from "../../assests/enterprice.jpg";
import FillOutUserForm from "./userForm";
import About_enterprise from "./information";
import Key_features from "./key.features";
import TransportCities from "./TransportCities";
import OurCients from "./Our.clients";
import CustomersReview from "./Custumore.review";
import Quary from "./Quary";
import ServeIndustries from "./Serve_industries";
import AskedQuestions from "../Home/AskedQuestions";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/action";
import Success_modal from "../../Custom/Success_modal";

const Enterprise = () => {
  const selector = useSelector((state: AppState) => state.banners);
  const [modalVisiable, setModalVisiable] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (modalVisiable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalVisiable]);
  return (
    <div>
      {modalVisiable && <Success_modal setModalVisiable={setModalVisiable} />}
      {Object.keys(selector).length !== 0 ? (
        <div className="min-h-screen font-titillium">
          <div className="relative">
            <div className="h-[70vh] lg:h-[90vh] relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
              <img
                className=" w-full h-full"
                src={selector?.enterprise_banner}
                alt=""
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 md:px-10">
              {/* Form Section */}
              <div className="w-full lg:w-1/2">
                <FillOutUserForm setModalVisiable={setModalVisiable} />
              </div>

              {/* About Section */}
              <div className="w-full lg:w-1/2">
                <About_enterprise />
              </div>
            </div>
          </div>
          {/* <div className='mt-24 bg-black/70 text-white'>
                        <Key_features />
                    </div> */}
          {/* <div className="mt-24">
            <OurCients />
          </div> */}
          <div className="">
            <TransportCities />
          </div>
          <div className="my-10">
            <CustomersReview />
          </div>
          <div className="my-10">
            <Quary />
          </div>
          <div className="my-10">
            <ServeIndustries />
          </div>
          <div className="my-10">
            <AskedQuestions />
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Enterprise;
