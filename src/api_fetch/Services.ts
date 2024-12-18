import axios from "axios";
import { base_url } from "../base_url";

export const services = async () => {
    try {
        const rs = await axios(`${base_url}our-services`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}