import axios from "axios";
import { base_url } from "../base_url";

export const blog_single_details = async (id?:string) => {
    try {
        const rs = await axios(`${base_url}blog/${id}`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}