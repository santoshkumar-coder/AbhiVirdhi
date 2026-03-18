import axios from "axios";
import { base_url } from "../base_url";

export const vehicle_Info = async (id: string) => {
    const formData = new FormData();
    formData.append("vehicle_type_id", id)
    try {
        const rs = await axios.get(`${base_url}get-Vehicle`);
        return rs.data.data
    } catch (error) {
        return error
    }
}