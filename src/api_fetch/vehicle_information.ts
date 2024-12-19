import axios from "axios";
import { base_url } from "../base_url";

export const vehicle_Info = async (id: string) => {
    const formData = new FormData();
    formData.append("vehicle_type_id", id)
    try {
        const rs = await axios.post(`${base_url}vehicle-description`, formData);
        return rs.data.data
    } catch (error) {
        return error
    }
}