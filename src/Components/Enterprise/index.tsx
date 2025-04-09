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
            <div className="h-[80vh] relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
              <img
                className=" w-full h-full"
                src={selector?.enterprise_banner}
                alt=""
              />
            </div>
            <div>
              <FillOutUserForm setModalVisiable={setModalVisiable} />
            </div>
            <div>
              <About_enterprise />
            </div>
          </div>
          {/* <div className='mt-24 bg-black/70 text-white'>
                        <Key_features />
                    </div> */}
          <div className="mt-24">
            <OurCients />
          </div>
          <div className="my-10">
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
