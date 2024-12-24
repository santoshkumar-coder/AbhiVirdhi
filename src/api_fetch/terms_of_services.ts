import axios from "axios";
import { base_url } from "../base_url";

export const terms_of_service = async () => {
    try {
        const rs = await axios(`${base_url}terms-of-service`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}