import React, { useEffect, useState } from "react";
import Show_Card from "./Show_Card";
import { blogs_data } from "../../api_fetch/blogs";
import { blogs_dataBy_category } from "../../api_fetch/blog_by_categoryID";
import { useParams } from "react-router-dom";

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
  category_id: string;
  id: string;
}

const Blog = () => {
  const [data, setData] = useState<Blog_fetch_data[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { categoryId } = useParams<{ categoryId?: string }>();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const rs = await blogs_data();
      setData(rs);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataByCategoryid = async () => {
    setIsLoading(true);
    try {
      const rs = await blogs_dataBy_category(categoryId || "");
      if (rs && rs.length > 0) {
        setData(rs);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data by category ID:", error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchDataByCategoryid();
    } else {
      fetchData();
    }

    window.scrollTo({
      top: 0,
    });
  }, [categoryId]);

  return (
    <div className="min-h-screen font-titillium">
      <div>
        <h1 className="text-center uppercase py-10 text-2xl font-extrabold">
          Abhiviridhi Pulse - Explore the World of Logistics!
        </h1>
      </div>
      <div className="space-y-5 mb-10">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : data && data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mx-5 md:mx-10">
            {data.map((item, index) => (
              <Show_Card key={index} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl font-semibold text-gray-500">
            No data found
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
