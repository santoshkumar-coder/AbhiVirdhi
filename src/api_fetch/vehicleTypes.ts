import axios from "axios";
import { base_url } from "../base_url/index";

export const vehicleTypes = async () => {
    try {
        const rs = await axios(`${base_url}vehicle-types`);
        // console.log(rs.data.data);
        return rs.data.data
    } catch (error) {
        console.log(error);
        return error
    }
}