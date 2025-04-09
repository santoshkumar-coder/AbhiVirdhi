import React from "react";
import { useNavigate } from "react-router-dom";
interface Topic_Description {
  topic: string;
  description: string;
}

interface Blog_fetch_data {
  category_name: string;
  images: string[];
  subtitle: string;
  title: string;
  topics_and_descriptions: Topic_Description[];
  id: string;
}
interface ShowCardProps {
  item: Blog_fetch_data;
  index: number;
}
const Show_Card: React.FC<ShowCardProps> = ({ item, index }) => {
  const navigate = useNavigate();
  return (
    <div
      className="m-5 flex items-center justify-center"
      onClick={() => navigate(`/blog/${item.category_name}/${item.id}`)}
    >
      {index % 2 === 0 ? (
        <div className="md:flex cursor-pointer items-center justify-between border border-black hover:border-gray-400 md:w-[70%] md:h-60 rounded-xl md:pl-10 md:p-0 p-5">
          <div className="md:w-[50%] md:pr-5">
            <h1 className="text-lg text-gray-600 font-semibold">
              {item.category_name}
            </h1>
            <h1 className="text-xl font-semibold">{item.subtitle}</h1>
            <p className="text-lg text-gray-500 text-justify">
              {item?.topics_and_descriptions &&
                item.topics_and_descriptions[0].description.substring(0, 150)}
              ...
            </p>
          </div>
          <div className="md:w-[50%] md:h-full h-52 md:mt-0 mt-5">
            <img
              className="w-full h-full md:rounded-r-xl rounded-xl md:rounded-none"
              src={item?.images[0]}
              alt="Abhiviridhi"
            />
          </div>
        </div>
      ) : (
        <div className="md:flex cursor-pointer items-center justify-between border border-black hover:border-gray-400 md:w-[70%] md:h-60 rounded-xl md:pr-10 md:p-0 p-5">
          <div className="md:w-[50%] md:h-full h-52">
            <img
              className="w-full h-full md:rounded-l-xl rounded-xl md:rounded-none"
              src={item?.images[0]}
              alt="Abhiviridhi"
            />
          </div>
          <div className="md:w-[50%] md:pl-5 md:mt-0 mt-5">
            <h1 className="text-lg text-gray-600 font-semibold">
              {item.category_name}
            </h1>
            <h1 className="text-xl font-semibold">{item.subtitle}</h1>
            <p className="text-lg text-gray-500 text-justify">
              {item?.topics_and_descriptions &&
                item.topics_and_descriptions[0].description.substring(0, 150)}
              ...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show_Card;
