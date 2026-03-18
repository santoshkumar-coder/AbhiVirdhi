import axios from "axios";
import { base_url } from "../base_url/index";


export const logoDynamic = async () => {
    console.log("logo api called", base_url);
    try {
        const rs = await axios(`${base_url}logo`);
        console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}