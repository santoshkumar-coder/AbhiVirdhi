import axios from "axios";
import { base_url } from "../base_url";

export const Insurance_faq = async () => {
    try {
        const rs = await axios(`${base_url}insurance-faq`);
        return rs.data.data
    } catch (error) {
        return error
    }
}