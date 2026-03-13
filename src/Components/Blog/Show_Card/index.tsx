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
      onClick={() => navigate(`/blog/${item.category_name}/${item.id}`)}
      className="cursor-pointer border border-gray-300 hover:border-gray-500 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
    >
      {/* IMAGE */}
      <div className="w-full h-52">
        <img
          className="w-full h-full object-cover"
          src={item?.images?.[0]}
          alt={item.subtitle}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-2">
        <h2 className="text-sm text-gray-500 font-semibold">
          {item.category_name}
        </h2>

        <h1 className="text-lg font-semibold line-clamp-2">
          {item.subtitle}
        </h1>

        <p className="text-gray-600 text-sm line-clamp-3">
          {item?.topics_and_descriptions?.[0]?.description}
        </p>
      </div>
    </div>
  );
};

export default Show_Card;