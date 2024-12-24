import axios from "axios";
import { base_url } from "../base_url";

export const privacy_policy = async () => {
    try {
        const rs = await axios(`${base_url}policy`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}