import React, { useEffect, useState } from "react";
import { customer_Review } from "../../../api_fetch/enterprices";

interface Review {
  heading: string;
  topic: string;
  description: string;
}

const CustomersReview = () => {
  const [customer_review, setCustomer_review] = useState<Review[] | null>(null);

  const handleCUtomerRevierw = async () => {
    const rs = await customer_Review();
    console.log(rs);
    setCustomer_review(rs?.data?.data);
  };
  useEffect(() => {
    handleCUtomerRevierw();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-bold text-xl text-center">
        SOME WORDS FROM OUR HAPPY CUSTOMERS
      </h1>
      <div className="flex justify-center items-center py-10 md:px-0 px-3">
        <div className="md:flex justify-center md:w-[70%] gap-10">
          {customer_review?.map((item, index) => (
            <div className="md:w-[30%] select-none hover:bg-gray-100 p-5 rounded-xl">
              <h1 className="text-lg font-bold ">{item?.heading}</h1>
              <p className="py-2 font-bold text-gray-600">
               {item?.topic}
              </p>
              <p className="text-gray-600 text-justify">
               {item?.description}
              </p>
            </div>
          ))}
          {/* <div className="md:w-[30%] select-none hover:bg-gray-100 p-5 rounded-xl">
            <h1 className="text-lg font-bold ">CEO</h1>
            <p className="py-2 font-bold text-gray-600">
              of an Ecommerce company
            </p>
            <p className="text-gray-600 text-justify">
              “They helped us with ground level sensitivity on vehicle
              utilisation. Their gps tracking system helped us ensure delivery
              in time and detect inefficiencies.”
            </p>
          </div>
          <div className="md:w-[30%] select-none hover:bg-gray-100 p-5 rounded-xl">
            <h1 className="text-lg font-bold ">Logistics Head</h1>
            <p className="py-2 font-bold text-gray-600">
              at a Leading FMCG MNC
            </p>
            <p className="text-gray-600 text-justify">
              “We had introduced Abhiviridhi in Mumbai for our fleet, they
              performed beyond expectations in terms of vehicle deployment and
              helped us scale at a much faster rate. This was done with complete
              visibility of service data on daily basis which helped understand
              the problems and immediate rectification of problems.”
            </p>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
