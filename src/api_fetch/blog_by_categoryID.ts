import axios from "axios";
import { base_url } from "../base_url";

export const blogs_dataBy_category = async (id: string) => {
    try {
        const rs = await axios(`${base_url}blogs/${id}`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}