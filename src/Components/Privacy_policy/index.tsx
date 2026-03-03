import React, { useEffect, useState } from "react";
import { privacy_policy } from "../../api_fetch/privacy_policy";

interface Policies {
  heading: string;
  description: string;
}

const Privacy_Policy: React.FC = () => {
  const [data, setData] = useState<Policies[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs = await privacy_policy();

        console.log("API RESPONSE:", rs);

        // ✅ Correct response path
        setData(rs?.policies || []);
      } catch (error) {
        console.error("Failed to fetch policy", error);
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
        Privacy Policy
      </h1>

      <div className="flex justify-center">
        <div className="md:w-[80%] w-[92%] bg-white md:p-10 p-5 mb-10 rounded-xl shadow-lg">

          {data.length === 0 && (
            <p className="text-center text-gray-500">
              Loading policies...
            </p>
          )}

          {data.map((item, index) => {
            const isOpen = openIndex === index;
            const paragraphs =
              item.description?.split("\n\n") || [];

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
                  <h2 className="capitalize font-bold text-lg md:text-xl">
                    {item.heading}
                  </h2>

                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* CONTENT */}
                <div
                  onClick={() => toggleSection(index)}
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[500px] mt-3" : "max-h-0"
                  }`}
                >
                  <div className="text-sm space-y-2 text-gray-700">
                    {paragraphs.map((desc, i) => (
                      <p key={i}>{desc}</p>
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

export default Privacy_Policy;