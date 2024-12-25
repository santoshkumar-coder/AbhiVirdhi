
import { TbMenu } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { logoDynamic } from "../../../api_fetch/logo";
import { CiSearch } from "react-icons/ci";
import { blog_category } from "../../../api_fetch/blogs_category";


interface Logo {
    logo: string;
}
interface Blog_category_data {
    name: string,
    id: string
}

const BlogHeader: React.FC = () => {
    const [logo, setLogo] = useState<Logo | null>(null);
    const [category_data, setCategory_Data] = useState<Blog_category_data[] | null>(null)


    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const rs = await logoDynamic();
            const rsCategory = await blog_category();
            setCategory_Data(rsCategory);
            console.log(rs.logo);
            setLogo(rs);
        } catch (error) {
            console.error("Failed to fetch logo:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <header className="border-b-2 border-gray-200 max-h-20 flex lg:justify-around justify-between items-center sticky top-0 z-20 bg-white">
            <div>
                {logo?.logo ? (
                    <img
                        src={logo.logo}
                        className="cursor-pointer select-none w-24 h-20"
                        alt="logo"
                        onClick={() => navigate('/')}
                    />
                ) : (
                    <div className="w-24 h-20 bg-gray-200 flex items-center justify-center">
                        Loading...
                    </div>
                )}
            </div>
            <div className="lg:flex hidden gap-5 font-semibold">
                <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Community Guidelines</Link>
                <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Life at Porter</Link>
                <Link to="/blog" className="hover:text-blue-800 cursor-pointer">Impact Tales</Link>
                <Link to="/blog" className="hover:text-blue-800 cursor-pointer ">Enterprise Focus</Link>
                <select name="" id="" className="cursor-pointer" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    navigate(`/blog/${e.target.value}`)
                }}>
                    <option value="" disabled selected>Select a category</option>
                    {category_data?.map((item, index) => {
                        return (
                            <option value={item.id}>{item.name}</option>
                        )
                    })}

                </select>
            </div>


            <div className="lg:flex items-center justify-center gap-5 hidden ">
                <CiSearch className="w-8 h-8 cursor-pointer" />
                <Link to="/" className="font-semibold bg-[#0445DA] text-white cursor-pointer py-2 px-3 rounded-lg hover:bg-white hover:text-[#0445DA] border-2 border-[#0445DA]">Gen An Estimate</Link>
            </div>
            <div className="lg:hidden block">
                <TbMenu className="font-bold text-3xl text-black hover:text-black/80 cursor-pointer" />
            </div>
        </header>
    );
};

export default BlogHeader;
