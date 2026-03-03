import React, { useEffect, useState } from "react";
import { terms_of_service } from "../../api_fetch/terms_of_services";

interface Terms_of_service_Data {
  heading: string;
  description: string;
}

const Terms_of_service: React.FC = () => {
  const [data, setData] = useState<Terms_of_service_Data[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await terms_of_service();

        console.log("API RESPONSE:", rs);

        // adjust if API has nested data
        setData(rs?.data?.terms_of_service || rs?.terms_of_service || []);
      } catch (error) {
        console.error("Failed to fetch terms", error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  /* ---------------- TOGGLE ---------------- */
  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen font-titillium">
      <h1 className="text-center uppercase py-10 text-xl font-bold">
        Terms of Service
      </h1>
      <div className="md:w-[80%] w-[92%] mx-auto text-[18px] ">
     {
  data.map((item, index) => (
    item.heading == "Terms Of Service" && (
      <div key={index}>
        {item.description}
      </div>
    )
  ))
}
</div>

      <div className="flex justify-center">
        <div className="md:w-[80%] w-[92%] bg-white text-justify md:p-10 p-5 mb-10 rounded-xl shadow-lg">

          {data.length === 0 && (
            <p className="text-center text-gray-500">
              Loading terms...
            </p>
          )}
          

          {data.map((item, index) => {
            const isOpen = openIndex === index;
            const paragraphs =
              item.description?.split("\n") || [];

            return (
              <div
                key={index}
                className="border-b last:border-none py-4"
              >
                {/* HEADER */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  {item.heading !== "Terms Of Service" && (
                    <h2 className="capitalize font-bold text-lg md:text-xl">
                      {item.heading}
                    </h2>
                  )}
                  
                  {item.heading !== "Terms Of Service" && (
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>)}
                </button>

                {/* CONTENT */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[600px] mt-3" : "max-h-0"
                  }`}
                >
                  <div className="text-sm space-y-2 text-gray-700">
                    {paragraphs.map((desc, i) => (
                      <p key={i} className="my-2">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Terms_of_service;