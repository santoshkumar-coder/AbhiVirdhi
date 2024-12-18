import axios from "axios";
import { base_url } from "../base_url";

export const news = async () => {
    try {
        const rs = await axios(`${base_url}news`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}