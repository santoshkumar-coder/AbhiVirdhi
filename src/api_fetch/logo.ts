import axios from "axios";
import { base_url } from "../base_url";

export const logoDynamic = async () => {
    try {
        const rs = await axios(`${base_url}logo`);
        console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}