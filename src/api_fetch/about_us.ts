import axios from "axios";
import { base_url } from "../base_url/index";

export const about_us = async () => {
    try {
        const rs = await axios.get(`${base_url}get-about-us`);
        console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}